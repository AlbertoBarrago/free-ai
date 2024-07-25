/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        model: process.env.MODEL || 'phi3',
    },
};

export default nextConfig;
