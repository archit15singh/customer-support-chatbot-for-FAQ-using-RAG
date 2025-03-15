# X (Twitter) Customer Support Chatbot - Development Setup Guide

This guide provides detailed instructions for setting up and running the X (Twitter) Customer Support Chatbot that uses Retrieval Augmented Generation (RAG) with the Mistral-7B model.

## Project Overview

This project implements a customer support chatbot for X (Twitter) using:
- **Mistral-OpenOrca model**: Run locally through Ollama
- **RAG (Retrieval Augmented Generation)**: Enhances model responses with relevant context from X's support documentation
- **Flask**: Backend API
- **React**: Frontend interface
- **ChromaDB**: Vector database for storing and retrieving document embeddings

## System Architecture

The system consists of the following components:

1. **Backend**:
   - Flask server exposing a `/chat` endpoint
   - Langchain for document processing and retrieval
   - Ollama for running the LLM locally
   - ChromaDB for vector storage
   - HuggingFace embeddings for vectorizing text

2. **Frontend**:
   - React-based chat interface
   - Axios for API communication

3. **Data**:
   - Raw text files containing X's support documentation
   - Vector database storing embeddings of document chunks

## Prerequisites

- Python 3.9 (recommended for compatibility)
- Node.js and npm
- Ollama installed (for running Mistral model locally)
- pyenv (for Python version management)

## Setup Instructions

### Step 1: Python Environment Setup with pyenv

1. Install a compatible Python version using pyenv:

```bash
# Install Python 3.9
pyenv install 3.9

# Set local Python version for the project
pyenv local 3.9
```

2. Create and activate a virtual environment:

```bash
# Navigate to the backend directory
cd backend

# Create a virtual environment
python -m venv .venv

# Activate the virtual environment
source .venv/bin/activate

# Update pip
pip install --upgrade pip
```

### Step 2: Install Backend Dependencies

1. Install key Python packages:

```bash
pip install langchain langchain-community chromadb sentence-transformers flask flask-cors huggingface_hub spacy ollama
```

2. Install spaCy language model (required for text splitting):

```bash
python -m spacy download en_core_web_sm
```

### Step 3: Ollama Setup

1. Ensure Ollama is installed (can be installed via Homebrew on macOS):

```bash
# Check Ollama version
ollama --version
```

2. Pull the Mistral-OpenOrca model:

```bash
ollama pull mistral-openorca
```

### Step 4: Data Ingestion

Run the ingestion script to process documents and create the vector database:

```bash
# Make sure you're in the backend directory with venv activated
python ingest.py
```

This script will:
- Load all documents from the `raw_txt` directory
- Split them into manageable chunks
- Create embeddings for each chunk
- Store them in a ChromaDB vector database

### Step 5: Start the Backend Server

Run the Flask application:

```bash
# Make sure you're in the backend directory with venv activated
python app.py
```

The server should start running on http://127.0.0.1:5000

### Step 6: Frontend Setup

1. Install frontend dependencies:

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install
```

2. Start the React development server:

```bash
npm start
```

The frontend should be accessible at http://localhost:3000

## Environment Variables

The following environment variables can be configured:

| Variable | Default | Description |
|----------|---------|-------------|
| MODEL | mistral-openorca | The Ollama model to use |
| EMBEDDINGS_MODEL_NAME | all-MiniLM-L6-v2 | HuggingFace embeddings model |
| PERSIST_DIRECTORY | db | Directory for the vector database |
| TARGET_SOURCE_CHUNKS | 4 | Number of source chunks to retrieve per query |

## Project Structure

```
.
├── backend/
│   ├── app.py              # Flask application 
│   ├── ingest.py           # Document processing script
│   ├── utils.py            # Utility functions for RAG
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── package.json        # npm dependencies
│   ├── public/             # Static assets
│   └── src/                # React components
└── raw_txt/                # Raw documentation files
```

## Usage

Once the application is running:

1. Open your browser and navigate to http://localhost:3000
2. Type your X (Twitter) support question in the chat interface
3. The system will:
   - Retrieve relevant content from the knowledge base
   - Generate a response using the Mistral model
   - Suggest related questions

## Troubleshooting

### Common Issues

1. **Package conflicts**: If you encounter dependency conflicts, try installing without strict version pinning.

2. **Model download failures**: Ensure you have a stable internet connection when pulling the Mistral model.

3. **"No module found" errors**: Make sure your virtual environment is activated and all dependencies are installed.

4. **Frontend connectivity issues**: Check that the backend server is running and CORS is properly configured.

### Debug Tips

- Check the Flask server logs for backend errors
- Examine browser console for frontend issues
- Verify Ollama is running properly with `ollama list`

## Advanced Configuration

### Customizing the Vector Database

You can modify parameters in `ingest.py`:
- Change chunk size
- Adjust chunk overlap
- Select different embedding models

### Using Different LLMs

The system can work with any model supported by Ollama:
1. Pull the desired model: `ollama pull <model-name>`
2. Update the MODEL environment variable

## Development Workflow

1. Make changes to the codebase
2. For backend changes that affect the vector database, re-run `ingest.py`
3. Restart the Flask server
4. For frontend changes, the React development server will automatically reload

---

Created on: March 16, 2025
