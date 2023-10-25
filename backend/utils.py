from langchain.chains import RetrievalQA
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import Chroma
from langchain.llms import Ollama
import os
import time

def initialize_qa_system():
    model = os.environ.get("MODEL", "mistral-openorca")
    embeddings_model_name = os.environ.get("EMBEDDINGS_MODEL_NAME", "all-MiniLM-L6-v2")
    persist_directory = os.environ.get("PERSIST_DIRECTORY", "db")
    target_source_chunks = int(os.environ.get('TARGET_SOURCE_CHUNKS', 4))

    embeddings = HuggingFaceEmbeddings(model_name=embeddings_model_name)
    db = Chroma(persist_directory=persist_directory, embedding_function=embeddings)
    retriever = db.as_retriever(search_kwargs={"k": target_source_chunks})
    callbacks = [] # can add streaming here

    llm = Ollama(model=model, callbacks=callbacks)
    qa = RetrievalQA.from_chain_type(llm=llm, chain_type="stuff", retriever=retriever, return_source_documents=True)
    
    return qa


def generate_related_questions(qa, parent_question, related_context):
    query = f"""what are some related questions that can be asked for the parent question '{parent_question}' based on the following related context:\n{related_context}. Only include the related questions in a numbered format"""
    res = qa(query)
    return res['result']

def extract_related_context(docs):
    related_context = ""
    for document in docs:
        related_context += f"\n> {document.metadata['source']}:\n{document.page_content}\n"
    return related_context

def run(qa, query):
    s = time.time()
    res = qa(query)
    e = time.time()
    print(f"took {e-s} seconds to complete RAG based QA")
    answer, docs = res['result'], res['source_documents']

    s = time.time()
    related_context = extract_related_context(docs)
    related_questions = generate_related_questions(qa, query, related_context)
    e = time.time()
    print(f"took {e-s} seconds to generate related_questions")
    
    return answer, related_questions

def generate_rag_response(query):
    s = time.time()
    qa = initialize_qa_system()
    e = time.time()
    print(f"took {e-s} seconds to complete initialize_qa_system")
    return run(qa, query)
