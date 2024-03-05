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
};

export default nextConfig;
