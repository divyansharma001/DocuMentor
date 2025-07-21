import fs from 'fs';
import pdfParse from 'pdf-parse';
import {RecursiveCharacterTextSplitter} from 'langchain/text_splitter'

export const loadPdf = async (pdfPath: string) : Promise<string> => {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    
    return data.text;
}


export const embedPdf = async()=>{
    const text = await loadPdf('src/data/hireDivyanshSharma.pdf');
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 100,
    });
    const docs = await textSplitter.createDocuments([text]);
    return docs;
}

