/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ollamaModel: process.env.OLLAMA_MODEL || 'phi3',
        ollamaSystem: process.env.OLLAMA_SYSTEM || 'beNice',
    },
};

export default nextConfig;
