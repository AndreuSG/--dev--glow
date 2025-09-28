/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/glow' : '',
  assetPrefix: isProd ? '/glow/' : '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { dev, isServer }) => {
    // Disable webpack caching in development to prevent file system issues
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;
