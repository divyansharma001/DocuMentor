# RAG PDF Question-Answering API

This repository contains the backend server for a Retrieval-Augmented Generation (RAG) application. It ingests a PDF document and exposes a simple API endpoint to answer questions based on the document's content, powered by Google's Gemini models and LangChain.

## 🏛️ Architecture Overview

This project uses a RAG pipeline orchestrated by LangChain. On startup, the server ingests, chunks, and embeds a PDF document into an in-memory vector store. The API endpoint then uses this store to retrieve relevant context and generate precise answers to user questions.

**[➡️ Click here to view the interactive diagram on Eraser.io]([https://app.eraser.io/workspace/...](https://app.eraser.io/workspace/jBow2tkBIyjKzLfUmsLb?origin=share))** 
_**(Note: Replace this with your public Eraser.io share link)**_



### Architectural Flow

1.  **Initialization (One-time on server start)**:
    *   The `ingest.ts` service reads the local PDF file (`src/data/hireDivyanshSharma.pdf`).
    *   The text is split into chunks using `RecursiveCharacterTextSplitter`.
    *   Each chunk is sent to the Google `embedding-001` API to be converted into a vector embedding.
    *   These embeddings are stored in a `MemoryVectorStore` in the server's RAM.
    *   The complete LangChain `RunnableSequence` (the "agent") is assembled and stored in memory, ready for requests.

2.  **API Request (For each `POST /ask` call)**:
    *   The user's question is received by the Express server.
    *   The agent's `retriever` performs a similarity search in the vector store to find the most relevant text chunks (the "context").
    *   A detailed prompt containing the user's question and the retrieved context is sent to the `gemini-2.5-flash` model.
    *   Gemini generates an answer *strictly* based on the provided context.
    *   The final, clean answer is returned to the user as a JSON response.

---

## ✨ Key Features

-   **PDF Ingestion**: Loads and processes text from a local PDF file at startup.
-   **Vector Embeddings**: Uses Google's `embedding-001` model for state-of-the-art text embedding.
-   **In-Memory RAG**: Performs fast and efficient similarity searches using an in-memory vector store for low-latency retrieval.
-   **LLM-Powered Answers**: Leverages Google's powerful and cost-effective `gemini-2.5-flash` model for generating answers.
-   **Strict & Factual Prompting**: The agent is rigorously instructed to *only* use the provided context, preventing hallucinations and ensuring answers are grounded in the source document. If the answer isn't in the text, it says so.
-   **Simple REST API**: Exposes a single, easy-to-use `/ask` endpoint.

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or later is recommended)
-   NPM or Yarn
-   A **Google AI API Key**. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd server
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env` in the `server/` directory and add your Google API key:
    ```env
    # .env
    GOOGLE_API_KEY="YOUR_GOOGLE_API_KEY_HERE"
    ```

4.  **Run the development server:**
    This command starts the server with `ts-node-dev`, which will automatically restart on file changes. The server will first ingest the PDF and then become ready to accept requests.
    ```bash
    npm run dev
    ```
    You should see the following output in your console:
    ```
    Server running on port 3000
    ```

## 📡 API Usage

### Ask a Question

Send a `POST` request to the `/ask` endpoint with your question in the JSON body.

-   **URL**: `http://localhost:3000/ask`
-   **Method**: `POST`
-   **Headers**: `Content-Type: application/json`
-   **Body**:
    ```json
    {
      "question": "What is the main topic of the PDF?"
    }
    ```

#### Example with cURL:

You can use the built-in test script from `package.json`:
```bash
npm run test:api
