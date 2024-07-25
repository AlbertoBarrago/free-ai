import {createOllama} from 'ollama-ai-provider';
import {StreamingTextResponse, StreamData, streamText} from "ai";

const ollama = createOllama();

export async function POST(req: Request, res: Response) {
    const {messages} = await req.json();
    console.log('MODEL:', process.env.model);
    const result = await streamText({
        model: ollama(process.env.ollamaModel || 'phi3'), //change model if you want
        system: process.env.ollamaSystem || "Be smart and funny",
        messages
    })

    return new StreamingTextResponse(result.toAIStream());
}