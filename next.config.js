/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Trim the trailing slash if there is one
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

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
  basePath,
  assetPrefix,
  // This setting ensures that Next.js knows it's being deployed to GitHub Pages
  trailingSlash: true,
};

module.exports = nextConfig;
