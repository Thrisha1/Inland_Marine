/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
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
