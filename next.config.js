/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "mu.creativeracer.net",
      "www.whereig.com",
      "azse77seaprodsa.blob.core.windows.net",
      "www.pchouse.com.bd",
    ],
  },
};


module.exports = nextConfig
