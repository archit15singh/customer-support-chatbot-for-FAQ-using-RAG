from langchain.chains import RetrievalQA
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import Ollama
import os
import time


model = os.environ.get("MODEL", "mistral-openorca")
embeddings_model_name = os.environ.get("EMBEDDINGS_MODEL_NAME", "all-MiniLM-L6-v2")
persist_directory = os.environ.get("PERSIST_DIRECTORY", "db")
target_source_chunks = int(os.environ.get('TARGET_SOURCE_CHUNKS', 4))


def main():
    embeddings = HuggingFaceEmbeddings(model_name=embeddings_model_name)
    db = Chroma(persist_directory=persist_directory, embedding_function=embeddings)
    retriever = db.as_retriever(search_kwargs={"k": target_source_chunks})
    callbacks = []

    llm = Ollama(model=model, callbacks=callbacks)

    qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=retriever, return_source_documents=True)
    while True:
        query = input("\nEnter a query: ")
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
        print(end-start)
        print('*'*100)
        related_context = ""
        for document in docs:
            related_context += "\n> " + document.metadata["source"] + ":\n"
            related_context += document.page_content + '\n'
            print("\n> " + document.metadata["source"] + ":")
            print(document.page_content)
        print('*'*100)
        print(len(related_context))
        print('*'*100)

        res = llm(f"what are some related questions that can be asked for the parent question '{query}' based on the following related context: {related_context}")
        print(res)



if __name__ == "__main__":
    main()