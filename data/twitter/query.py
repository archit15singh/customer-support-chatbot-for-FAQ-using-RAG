from langchain.chains import RetrievalQA
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import Ollama
import os
import time


def initialize_qa_system():
    model = os.environ.get("MODEL", "mistral-openorca")
    embeddings_model_name = os.environ.get("EMBEDDINGS_MODEL_NAME", "all-MiniLM-L6-v2")
    persist_directory = os.environ.get("PERSIST_DIRECTORY", "/Users/architsingh/Documents/projects/multilingual-chatbot-mistral-7b/backend/db")
    target_source_chunks = int(os.environ.get('TARGET_SOURCE_CHUNKS', 4))

    embeddings = HuggingFaceEmbeddings(model_name=embeddings_model_name)
    db = Chroma(persist_directory=persist_directory, embedding_function=embeddings)
    retriever = db.as_retriever(search_kwargs={"k": target_source_chunks})
    callbacks = []

    llm = Ollama(model=model, callbacks=callbacks)

    qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=retriever, return_source_documents=True)

    return qa


def input_query(qa):
    while True:
        query = input("\nEnter a query (type 'exit' to quit): ")
        if query == "exit":
            break
        if query.strip() == "":
            continue

        start = time.time()
        res = qa(query)
        answer, docs = res['result'], res['source_documents']
        end = time.time()

        print("\n\n> Question:")
        print(query)
        print(answer)
        print(f"Time taken: {end - start} seconds")

        related_context = extract_related_context(docs)
        generate_related_questions(qa, query, related_context)


def extract_related_context(docs):
    related_context = ""
    for document in docs:
        related_context += f"\n> {document.metadata['source']}:\n{document.page_content}\n"
    return related_context


def generate_related_questions(qa, parent_question, related_context):
    query = f"what are some related questions that can be asked for the parent question '{parent_question}' based on the following related context:\n{related_context}"
    res = qa(query)
    print("\nRelated Questions:")
    print(res['result'])


def main():
    qa = initialize_qa_system()
    input_query(qa)


if __name__ == "__main__":
    main()
