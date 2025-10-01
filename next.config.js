/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: "/glow",
  assetPrefix: "/glow/",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    // Disable webpack caching in development to prevent file system issues
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;