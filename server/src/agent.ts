import { embedPdf } from "./ingest"
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { formatDocumentsAsString } from "langchain/util/document";

export const initAgent = async () => {
    const vectorStore = await embedPdf();
    const retriever = vectorStore.asRetriever();

    // Choose Gemini chat model
    const llm = new ChatGoogleGenerativeAI({
        model: "gemini-2.5-flash",
        maxOutputTokens: 2048,
        apiKey: process.env.GOOGLE_API_KEY,
    });

    // Professional system prompt
    const system_prompt = `
    You are a world-class AI assistant specializing in answering questions based on provided context. Your task is to synthesize a concise and accurate answer *strictly* from the given text.

    Follow these rules rigorously:
    1.  Carefully analyze the user's question.
    2.  Locate the relevant information within the <context> provided.
    3.  Formulate a direct answer to the question using *only* this information. Do not use any external knowledge.
    4.  If the context does not contain the answer, you **must** state: "The provided context does not contain enough information to answer this question."
    5.  Keep your answer to a maximum of three sentences and maintain a professional, helpful tone.
    6.  Do not mention that your answer is based on the context in your response.
    `;

        const professional_prompt = ChatPromptTemplate.fromMessages([
            ["system", system_prompt],
            ["human", "<question>{question}</question>\n<context>{context}</context>\nAnswer:"]
        ]);

    // Compose the chain
    const chain = RunnableSequence.from([
        async (input) => ({
            context: formatDocumentsAsString(await retriever.getRelevantDocuments(input.question)),
            question: input.question,
        }),
        professional_prompt,
        llm,
        new StringOutputParser(),
    ]);

    return chain;
}