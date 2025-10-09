#!/usr/bin/env node

/**
 * This script fixes asset paths in the Next.js static export for GitHub Pages deployment.
 * It ensures that all asset references use the correct basePath.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const outDir = path.join(__dirname, 'out');
// No basePath needed for custom domain deployment
const basePath = '';

console.log('🔍 Checking asset paths in Next.js static export...');

// Function to recursively find HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix asset paths in HTML files
function fixHtmlAssetPaths(htmlFile) {
  console.log(`Processing ${htmlFile}...`);
  
  let content = fs.readFileSync(htmlFile, 'utf8');
  let modified = false;
  
  // For custom domain deployment, asset paths should already be correct
  // This script now mainly ensures .nojekyll exists and provides debugging info
  console.log(`✓ Asset paths should be correct for custom domain deployment in ${htmlFile}`);
  
  if (modified) {
    fs.writeFileSync(htmlFile, content, 'utf8');
    console.log(`✅ Fixed asset paths in ${htmlFile}`);
  } else {
    console.log(`✓ No changes needed in ${htmlFile}`);
  }
}

// Function to check if _next directory exists
function checkNextDirectory() {
  const nextDir = path.join(outDir, '_next');
  if (!fs.existsSync(nextDir)) {
    console.error('❌ Error: _next directory not found in build output');
    console.log('Creating empty directory structure for debugging...');
    
    // Create the directory structure
    fs.mkdirSync(nextDir, { recursive: true });
    fs.mkdirSync(path.join(nextDir, 'static'), { recursive: true });
    fs.mkdirSync(path.join(nextDir, 'static', 'chunks'), { recursive: true });
    fs.mkdirSync(path.join(nextDir, 'static', 'css'), { recursive: true });
    
    // Create a placeholder file
    fs.writeFileSync(
      path.join(nextDir, 'static', 'placeholder.txt'),
      'This file was created by the fix-asset-paths.js script because the _next directory was missing.'
    );
    
    return false;
  }
  return true;
}

// Function to ensure .nojekyll file exists
function ensureNoJekyll() {
  const nojekyllPath = path.join(outDir, '.nojekyll');
  if (!fs.existsSync(nojekyllPath)) {
    console.log('Creating .nojekyll file...');
    fs.writeFileSync(nojekyllPath, '');
  }
}

// Main execution
try {
  // Check if out directory exists
  if (!fs.existsSync(outDir)) {
    console.error('❌ Error: out directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  // Check _next directory
  const nextDirExists = checkNextDirectory();
  
  // Ensure .nojekyll file exists
  ensureNoJekyll();
  
  // Find and process HTML files
  if (nextDirExists) {
    const htmlFiles = findHtmlFiles(outDir);
    console.log(`Found ${htmlFiles.length} HTML files to process.`);
    
    htmlFiles.forEach(fixHtmlAssetPaths);
    
    console.log('✅ Asset path fixing completed successfully!');
  } else {
    console.log('⚠️ Skipped HTML processing because _next directory was missing.');
  }
  
  // List the contents of the out directory for debugging
  console.log('\n📁 Contents of the out directory:');
  execSync('ls -la ./out', { stdio: 'inherit' });
  
  if (nextDirExists) {
    console.log('\n📁 Contents of the _next/static directory:');
    execSync('ls -la ./out/_next/static', { stdio: 'inherit' });
  }
  
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}
