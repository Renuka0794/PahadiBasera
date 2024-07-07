/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**.pahadibaserahomestay.netlify.app',
          port: '',
        },
      ],
    },
  }
