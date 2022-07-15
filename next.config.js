const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
    formats: ['image/webp'],
  },
}
