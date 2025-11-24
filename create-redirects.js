const fs = require('fs');
const path = require('path');

// Redirect mapping: old URL -> new URL
const redirects = {
  // Experience pages migrated to Journey
  '/experience/hedfirst': '/journey/teligant-hedfirst',
  '/experience/teligant': '/journey/teligant-hedfirst',
  '/experience/compoundlive': '/journey/compoundlive',
  '/experience/rugiet-health': '/journey/rugiet',
  '/experience/learn-academy': '/journey/learn-academy',

  // Projects renamed to Case Studies
  '/projects': '/case-studies',
  '/projects/pharmacy-fulfillment': '/case-studies/pharmacy-fulfillment',
  '/projects/choose-health-labs': '/case-studies/choose-health-labs',
  '/projects/platform-launch': '/case-studies/platform-launch',
  '/projects/paytheory-billing': '/case-studies/paytheory-billing',
};

// HTML template for redirect pages
const createRedirectHtml = (newUrl) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0;url=${newUrl}">
    <meta name="robots" content="noindex">
    <link rel="canonical" href="${newUrl}" />
    <title>Redirecting...</title>
    <script>
        window.location.href = "${newUrl}";
    </script>
</head>
<body>
    <p>This page has moved. Redirecting to <a href="${newUrl}">${newUrl}</a>...</p>
</body>
</html>`;

// Create redirect files
Object.entries(redirects).forEach(([oldPath, newPath]) => {
  const fullOldPath = path.join(__dirname, 'out', oldPath);
  const indexPath = path.join(fullOldPath, 'index.html');

  // Create directory if it doesn't exist
  if (!fs.existsSync(fullOldPath)) {
    fs.mkdirSync(fullOldPath, { recursive: true });
  }

  // Write redirect HTML file
  fs.writeFileSync(indexPath, createRedirectHtml(newPath));
  console.log(`✓ Created redirect: ${oldPath} -> ${newPath}`);
});

console.log('\n✅ All redirects created successfully!');
