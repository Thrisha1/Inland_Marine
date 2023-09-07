/** @type {import('next').NextConfig} */
const nextConfig = {
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
