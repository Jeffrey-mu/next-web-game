/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
