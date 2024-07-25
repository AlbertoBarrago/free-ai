import {createOllama} from 'ollama-ai-provider';
import {StreamingTextResponse, StreamData, streamText} from "ai";

const ollama = createOllama();

export async function POST(req: Request, res: Response) {
    const {messages} = await req.json();
    console.log('MODEL:', process.env.model);
    const result = await streamText({
        model: ollama(process.env.model || 'phi3'), //change model if you want
        messages
    })

    return new StreamingTextResponse(result.toAIStream());
}