import {createOllama} from 'ollama-ai-provider';
import {StreamingTextResponse, StreamData, streamText} from "ai";

const ollama = createOllama();

export async function POST(req: Request, res: Response) {
    const {messages} = await req.json();
    console.group('ENV ->')
    console.log('OLLAMA_MODEL:', process.env.ollamaModel);
    console.log('OLLAMA_SYSTEM:', process.env.ollamaSystem);
    console.groupEnd()
    const result = await streamText({
        model: ollama(process.env.ollamaModel || 'llama3'), //change model if you want
        system: process.env.ollamaSystem || "Be smart and funny",
        messages
    })

    return new StreamingTextResponse(result.toAIStream());
}