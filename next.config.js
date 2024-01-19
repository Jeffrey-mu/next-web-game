/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.minigame.vip',
      },
    ],
  },
}

module.exports = nextConfig
