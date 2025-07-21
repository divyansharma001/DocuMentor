import fs from 'fs';
import pdfParse from 'pdf-parse';

export const loadPdf = async (pdfPath: string) : Promise<String> => {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    console.log(data.text);
    return data.text;
}

loadPdf('src/data/hireDivyanshSharma.pdf');