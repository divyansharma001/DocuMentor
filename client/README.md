# DocuMentor

An intelligent AI agent that turns your PDFs into interactive, conversational knowledge bases using Retrieval-Augmented Generation (RAG).

## 🚀 Features

- **PDF Ingestion**: Loads and extracts text from any PDF document
- **Intelligent Chunking**: Splits documents into semantically meaningful chunks
- **State-of-the-Art Embeddings**: Uses OpenAI's models to generate vector embeddings
- **Vector Storage**: Integrates with leading vector databases like Pinecone, ChromaDB, and in-memory stores
- **RAG Pipeline**: Leverages Retrieval-Augmented Generation to retrieve relevant context and generate accurate answers
- **Conversational Interface**: Ask questions in natural language and get human-like responses

## 🏗️ Architecture

The workflow is designed to build a knowledge base from a PDF and then use it to answer user queries accurately:

1. **Load & Chunk**: The PDF document is loaded and its text is divided into smaller, optimized chunks
2. **Generate Embeddings**: Each text chunk is converted into a numerical vector representation using OpenAI Embeddings
3. **Index & Store**: The generated embeddings and their corresponding text are stored and indexed in a vector database
4. **Retrieve & Augment**: When a user asks a question, the AI Agent creates an embedding of the question and queries the vector database to find the most semantically similar text chunks
5. **Generate Answer**: The retrieved chunks (context) and the original question are passed to an LLM to generate a relevant and accurate answer

## 🛠️ Development

This project uses modern web technologies:

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Backend**: Node.js + TypeScript  
- **AI/ML**: OpenAI API + Vector Databases
- **UI Components**: Radix UI + shadcn/ui

## 📋 Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd DocuMentor

# Install dependencies for client
cd client
npm install

# Install dependencies for server  
cd ../server
npm install

# Start the development server
cd ../client
npm run dev

# In another terminal, start the backend server
cd server
npm run dev
```

## 🔧 Project Structure

```
DocuMentor/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components  
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
│   └── public/             # Static assets
└── server/                 # Node.js backend
    ├── src/
    │   ├── agent.ts        # AI agent logic
    │   ├── ingest.ts       # PDF processing
    │   └── index.ts        # Server entry point
    └── data/               # PDF documents
```

## 🚀 Features in Detail

### PDF Processing
- Supports multiple PDF formats
- Intelligent text extraction
- Automatic content chunking
- Metadata preservation

### AI Capabilities  
- OpenAI GPT integration
- Vector similarity search
- Contextual answer generation
- Conversation memory

### User Interface
- Clean, modern design
- Real-time chat interface
- Document upload and management
- Responsive design

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, TypeScript
- **AI/ML**: OpenAI API, Vector Databases
- **Build Tools**: Vite, ESLint, PostCSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
