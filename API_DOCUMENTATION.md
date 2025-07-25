# DocuMentor API Documentation

## Overview
DocuMentor is a RAG (Retrieval-Augmented Generation) based document Q&A system that allows users to ask questions about PDF documents. The system uses Google's Gemini AI model to provide intelligent answers based on the content of uploaded PDF documents.

## Base URL
```
http://localhost:3000
```

## Technology Stack
- **Backend Framework**: Express.js with TypeScript
- **AI/ML**: LangChain with Google Generative AI (Gemini)
- **Vector Store**: In-memory vector store
- **Embeddings**: Google Generative AI Embeddings (models/embedding-001)
- **LLM Model**: Gemini 2.0 Flash
- **PDF Processing**: pdf-parse library

## Environment Variables
The following environment variables are required:

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_API_KEY` | Google Generative AI API key for Gemini model access | Yes |
| `PORT` | Server port (defaults to 3000) | No |

## API Endpoints

### POST /ask
Ask a question about the PDF document content.

#### Request
- **Method**: `POST`
- **URL**: `/ask`
- **Content-Type**: `application/json`

#### Request Body
```json
{
  "question": "string"
}
```

#### Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| question | string | Yes | The question to ask about the PDF content |

#### Response

##### Success Response (200 OK)
```json
{
  "answer": "string"
}
```

##### Error Responses

**400 Bad Request** - Missing question parameter
```json
{
  "error": "Missing 'question' in request body."
}
```

**500 Internal Server Error** - Processing error
```json
{
  "error": "Failed to process the question."
}
```

#### Example Usage

##### cURL
```bash
curl -X POST http://localhost:3000/ask \
  -H 'Content-Type: application/json' \
  -d '{"question": "What is the main topic of the PDF?"}'
```

##### JavaScript/Fetch
```javascript
const response = await fetch('http://localhost:3000/ask', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    question: 'What are the key qualifications mentioned in the document?'
  })
});

const data = await response.json();
console.log(data.answer);
```

##### Python
```python
import requests
import json

url = "http://localhost:3000/ask"
payload = {
    "question": "What are the main skills highlighted in the document?"
}

response = requests.post(url, json=payload)
data = response.json()
print(data['answer'])
```

## Document Processing

### PDF Ingestion
The system automatically processes PDF documents using the following pipeline:

1. **PDF Loading**: Reads PDF files from `src/data/` directory
2. **Text Extraction**: Extracts text content using pdf-parse
3. **Text Splitting**: Chunks text using RecursiveCharacterTextSplitter
   - Chunk size: 1000 characters
   - Chunk overlap: 100 characters
4. **Embedding Generation**: Creates vector embeddings using Google's embedding-001 model
5. **Vector Storage**: Stores embeddings in memory-based vector store

### Current Document
The system is currently configured to process: `hireDivyanshSharma.pdf`

## AI Model Configuration

### Language Model (LLM)
- **Model**: Gemini 2.0 Flash
- **Max Output Tokens**: 2048
- **Provider**: Google Generative AI

### Embeddings
- **Model**: models/embedding-001
- **Provider**: Google Generative AI

### System Prompt
The AI assistant follows these guidelines:
- Analyzes questions based on provided context
- Provides answers strictly from the document content
- Returns "The provided context does not contain enough information to answer this question" when information is not available
- Maintains professional, helpful tone
- Limits answers to maximum three sentences

## Retrieval Process

1. **Question Processing**: User question is received and validated
2. **Document Retrieval**: Relevant document chunks are retrieved using vector similarity search
3. **Context Formation**: Retrieved documents are formatted as context
4. **AI Generation**: Gemini model generates answer based on context and question
5. **Response**: Structured answer is returned to user

## Server Configuration

### Development
```bash
npm run dev
```
- Uses ts-node-dev for hot reloading
- Transpiles TypeScript on the fly
- Ignores node_modules for watching
- Loads environment variables from .env file

### Production
```bash
npm start
```
- Uses ts-node for TypeScript execution

### Testing
```bash
npm run test:api
```
- Sends a test request to the /ask endpoint

## Error Handling

The API implements comprehensive error handling:

1. **Request Validation**: Checks for required parameters
2. **Processing Errors**: Catches and handles AI model errors
3. **Server Errors**: Logs errors and returns appropriate status codes

## Performance Considerations

- **Memory Usage**: Vector store is kept in memory for fast retrieval
- **Concurrent Requests**: Express.js handles multiple simultaneous requests
- **Response Time**: Depends on document size and question complexity
- **Rate Limiting**: No built-in rate limiting (consider implementing for production)

## Security Considerations

- **API Key Protection**: Ensure GOOGLE_API_KEY is kept secure
- **Input Validation**: Basic validation implemented for request body
- **CORS**: Not configured (add for cross-origin requests)
- **Authentication**: No authentication implemented (consider adding for production)

## Limitations

1. **Single Document**: Currently processes only one PDF at a time
2. **Memory Storage**: Vector store is not persistent across server restarts
3. **No File Upload**: PDF must be manually placed in src/data/ directory
4. **No Authentication**: Open endpoint without access control

## Future Enhancements

1. **Multiple Document Support**: Process multiple PDFs simultaneously
2. **Persistent Storage**: Use database for vector storage
3. **File Upload API**: Allow dynamic PDF uploads
4. **Authentication**: Implement user authentication and authorization
5. **Rate Limiting**: Add request rate limiting
6. **Caching**: Implement response caching for common questions
7. **WebSocket Support**: Real-time question-answer streaming

## Support

For issues and questions regarding the API, please refer to the source code or contact the development team.
