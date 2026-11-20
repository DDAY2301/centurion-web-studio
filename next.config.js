/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  compress: true,
  swcMinify: true,

  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'github.com', 'raw.githubusercontent.com'],
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Centurion Web Studio',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://centurion-web-studio.github.io',
  },

  // Analytics (disabled by default)
  experimental: {
    appDir: true,
  },

  // Bundle analyzer
  webpack(config) {
    if (process.env.ANALYZE === 'true') {
      const BundleAnalyzerPlugin = require('@next/bundle-analyzer')({
        analyzer: {
          open: true,
          mode: 'static',
        },
      });
      config.plugins.push(BundleAnalyzerPlugin);
    }
    return config;
  },
};

module.exports = nextConfig;