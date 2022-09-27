/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["localhost", "source.unsplash.com", "cdn.pixabay.com"],
    },
};

module.exports = nextConfig;
