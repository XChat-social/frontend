/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimisticClientCache: true,
  },
}

export default nextConfig
