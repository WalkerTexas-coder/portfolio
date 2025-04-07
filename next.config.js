/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      "cdn.prod.website-files.com",
      "images.unsplash.com",
      "web.archive.org",
      "cdn.prod.website-files.com"
    ],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
};

module.exports = nextConfig;
