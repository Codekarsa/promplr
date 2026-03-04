/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Cloudflare Pages
  experimental: {
    runtime: 'edge',
  },
};

export default nextConfig;