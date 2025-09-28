const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/glow' : '',
  },
  webpack: (config, { dev, isServer }) => {
    // Disable webpack caching in development to prevent file system issues
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;