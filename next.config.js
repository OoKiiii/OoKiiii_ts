/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    images: {
        domains: ['localhost', 'github.com', 'avatars.githubusercontent.com'],
    },
};

module.exports = nextConfig;
