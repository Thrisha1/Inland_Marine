/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindmix.b-cdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
