import fs from 'fs';
import pdfParse from 'pdf-parse';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { GoogleGenerativeAIEmbeddings } from '@langchain/google-genai';
import dotenv from 'dotenv';

dotenv.config();

export const loadPdf = async (pdfPath: string): Promise<string> => {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    return data.text;
};

export const embedPdf = async () => {
    const text = await loadPdf('src/data/hireDivyanshSharma.pdf');
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 100,
    });
    const docs = await textSplitter.createDocuments([text]);

   
    const embeddings = new GoogleGenerativeAIEmbeddings({
        apiKey: process.env.GOOGLE_API_KEY,
        model: 'models/embedding-001', 
    });

    const vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);

    return vectorStore;
};


