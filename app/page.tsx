'use client';
import {useChat} from "ai/react";
import Markdown from "react-markdown";

export default function Chat() {
    const {messages, input, handleInputChange, handleSubmit} = useChat();
    return (
        <div className="flex flex-1 flex-col w-full mx-2 stretch background-lama">
            {messages.map((message) => (
                <div key={message.id} className="whitespace-pre-wrap overflow-hidden rounded-md shadow overflow-y-auto">
                    {message.role === 'user' ? '🙂:': "🤖:"}
                    <Markdown>{message.content}</Markdown>
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <input
                    className="fixed bottom-0 min-w-[99%] max-w-xl p-2 border border-gray-300 rounded shadow-xl text-black whitespace-pre-wrap"
                    value={input}
                    placeholder={'Say hello and be nice ☺️'}
                    onChange={handleInputChange}/>
            </form>
        </div>
    );
}
