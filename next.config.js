/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["localhost", "source.unsplash.com", "cdn.pixabay.com", "m.media-amazon.com"],
    },
};

module.exports = nextConfig;
