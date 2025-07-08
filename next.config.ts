import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  devIndicators: false,
  images: {
    domains: ['https://zrfywyajdtqwwjiobeys.storage.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zrfywyajdtqwwjiobeys.storage.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
