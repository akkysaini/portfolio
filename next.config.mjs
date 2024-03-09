/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.unplash.com",
      },
    ],
  },
  experimental:{
    serverActions : true,
  },
};

export default nextConfig;
