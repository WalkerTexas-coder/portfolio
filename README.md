# Austin Walker's Portfolio

This is a Next.js portfolio site deployed to GitHub Pages.

## Deployment Instructions

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/walkertexas-coder/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### GitHub Pages Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions.

**Hosting Infrastructure:**
- **GitHub Pages**: Hosts the static site files from the `gh-pages` branch
- **AWS Route 53**: Provides DNS management and routes the custom domain to GitHub Pages

To manually deploy the site:

1. Build the site:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### 404 Errors for JavaScript Files

If you encounter 404 errors for JavaScript or CSS files on GitHub Pages, try the following:

1. **Check the build output**: Make sure the `_next` directory is being generated in the `out` directory.
   ```bash
   npm run build
   ls -la ./out/_next/static
   ```

2. **Run the fix-asset-paths script**: This script fixes asset paths in the Next.js static export.
   ```bash
   npm run fix-paths
   ```

3. **Clear GitHub Pages cache**: Sometimes GitHub Pages caches old files. You can force a rebuild by pushing an empty commit:
   ```bash
   git commit --allow-empty -m "Force rebuild"
   git push
   ```

4. **Check the basePath and assetPrefix**: Make sure these are correctly set in `next.config.js`.

5. **Verify the deployment**: Check the GitHub Actions workflow to ensure it completed successfully.

### Asset Path Issues

The site uses a custom script (`fix-asset-paths.js`) to ensure all asset paths are correctly prefixed with the repository name. This script is automatically run during the build process.

If you're still experiencing issues, you can manually check the HTML files in the `out` directory to ensure they're referencing assets with the correct paths:

```bash
grep -r "/_next/" ./out
```

All asset paths should be prefixed with `/portfolio/_next/`.

## Configuration

### Next.js Configuration

The site uses the following Next.js configuration:

- `output: 'export'`: Generates a static export
- `basePath` and `assetPrefix`: Set to `/portfolio` for GitHub Pages
- `trailingSlash: true`: Ensures URLs end with a trailing slash for better compatibility with GitHub Pages

### GitHub Actions Workflow

The GitHub Actions workflow:

1. Checks out the repository
2. Sets up Node.js
3. Installs dependencies
4. Builds the site
5. Verifies the build output
6. Deploys to the gh-pages branch

## Testing

To test the site locally with the GitHub Pages configuration:

1. Build the site:
   ```bash
   npm run build
   ```

2. Serve the static files:
   ```bash
   npx serve -s out
   ```

3. Open [http://localhost:3000/portfolio/](http://localhost:3000/portfolio/) in your browser.

## License

This project is licensed under the MIT License.
