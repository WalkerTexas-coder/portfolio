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
  // No basePath or assetPrefix needed for custom domain
  trailingSlash: true,
};

module.exports = nextConfig;
