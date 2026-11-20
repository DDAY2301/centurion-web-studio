import { NextResponse } from 'next/server';

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
    NEXT_PUBLIC_SITE_NAME: 'Lumeli',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://lumeli.eu',
  },

  // Disable experimental for stability
  // experimental: {
  //   appDir: true,
  // },

  // Bundle analyzer (only when enabled)
  webpack(config) {
    if (process.env.ANALYZE === 'true') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer')({
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

export default nextConfig;