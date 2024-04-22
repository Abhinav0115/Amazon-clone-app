/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "res.cloudinary.com" },
            { protocol: "https", hostname: "fakestoreapi.com" },
            { protocol: "https", hostname: "i.imgur.com" },
            { protocol: "https", hostname: "images-eu.ssl-images-amazon.com" },
        ],
    },
};

export default nextConfig;
