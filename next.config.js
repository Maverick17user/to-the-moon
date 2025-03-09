/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'live.staticflickr.com',  // New Flickr CDN domain
      'farm1.staticflickr.com',
      'farm2.staticflickr.com',
      'farm3.staticflickr.com',
      'farm4.staticflickr.com',
      'farm5.staticflickr.com',
      'farm6.staticflickr.com',
      'farm7.staticflickr.com',
      'farm8.staticflickr.com',
      'farm9.staticflickr.com',
      'images2.imgbox.com', // Fallback image host if needed
    ],
  },
}

module.exports = nextConfig 