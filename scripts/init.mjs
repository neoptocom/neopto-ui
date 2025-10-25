#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  red: '\x1b[31m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function findCssFile() {
  const possiblePaths = [
    'src/index.css',
    'src/app.css',
    'src/main.css',
    'src/styles.css',
    'src/global.css',
    'src/globals.css',
    'app/globals.css', // Next.js
    'styles/globals.css', // Next.js alternative
  ];

  for (const path of possiblePaths) {
    if (existsSync(path)) {
      return path;
    }
  }

  return null;
}

function checkTailwindInstalled() {
  try {
    const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));
    const hasTailwind = 
      packageJson.dependencies?.tailwindcss || 
      packageJson.devDependencies?.tailwindcss;
    
    if (!hasTailwind) {
      log('⚠️  Warning: Tailwind CSS not found in package.json', 'yellow');
      log('   Make sure to install: npm install -D tailwindcss@latest @tailwindcss/postcss', 'yellow');
      return false;
    }
    return true;
  } catch (error) {
    log('⚠️  Warning: Could not read package.json', 'yellow');
    return false;
  }
}

function updateCssFile(cssPath) {
  let content = readFileSync(cssPath, 'utf-8');
  
  const neededLines = [
    '@import "tailwindcss";',
    '@source "../node_modules/@neoptocom/neopto-ui/src";',
    '@import "@neoptocom/neopto-ui/styles";',
  ];

  let modified = false;
  const addedLines = [];

  // Check and add @import "tailwindcss"
  if (!content.includes('@import "tailwindcss"')) {
    content = `@import "tailwindcss";\n\n${content}`;
    modified = true;
    addedLines.push('@import "tailwindcss"');
  }

  // Check and add @source directive
  if (!content.includes('@source') || !content.includes('@neoptocom/neopto-ui')) {
    const importIndex = content.indexOf('@import "tailwindcss"');
    if (importIndex !== -1) {
      const lineEnd = content.indexOf('\n', importIndex);
      content = 
        content.slice(0, lineEnd + 1) +
        '\n/* Scan neopto-ui components */\n' +
        '@source "../node_modules/@neoptocom/neopto-ui/src";\n' +
        content.slice(lineEnd + 1);
      modified = true;
      addedLines.push('@source directive');
    }
  }

  // Check and add library styles import
  if (!content.includes('@import "@neoptocom/neopto-ui/styles"')) {
    const sourceIndex = content.indexOf('@source "../node_modules/@neoptocom/neopto-ui/src"');
    if (sourceIndex !== -1) {
      const lineEnd = content.indexOf('\n', sourceIndex);
      content = 
        content.slice(0, lineEnd + 1) +
        '\n/* Import neopto-ui design tokens and styles */\n' +
        '@import "@neoptocom/neopto-ui/styles";\n' +
        content.slice(lineEnd + 1);
      modified = true;
      addedLines.push('library styles import');
    }
  }

  if (modified) {
    writeFileSync(cssPath, content, 'utf-8');
    log(`\n✅ Updated ${cssPath}`, 'green');
    if (addedLines.length > 0) {
      log(`   Added: ${addedLines.join(', ')}`, 'blue');
    }
    return true;
  } else {
    log(`\n✅ ${cssPath} already configured!`, 'green');
    return false;
  }
}

function createPostCssConfig() {
  const configPath = 'postcss.config.js';
  
  if (existsSync(configPath)) {
    const content = readFileSync(configPath, 'utf-8');
    if (content.includes('@tailwindcss/postcss')) {
      log('✅ postcss.config.js already configured', 'green');
      return false;
    }
  }

  const config = `export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
`;

  writeFileSync(configPath, config, 'utf-8');
  log('✅ Created postcss.config.js', 'green');
  return true;
}

async function main() {
  log('\n╔══════════════════════════════════════════╗', 'blue');
  log('║   NeoPTO UI Component Library Setup     ║', 'blue');
  log('╚══════════════════════════════════════════╝\n', 'blue');

  // Check if we're in a project root
  if (!existsSync('package.json')) {
    log('❌ Error: package.json not found. Please run this command from your project root.', 'red');
    process.exit(1);
  }

  // Check Tailwind installation
  log('📦 Checking dependencies...', 'blue');
  checkTailwindInstalled();

  // Create PostCSS config
  log('\n⚙️  Setting up PostCSS...', 'blue');
  createPostCssConfig();

  // Find and update CSS file
  log('\n🎨 Setting up CSS configuration...', 'blue');
  const cssFile = findCssFile();
  
  if (cssFile) {
    updateCssFile(cssFile);
  } else {
    log('\n⚠️  Could not find main CSS file', 'yellow');
    log('   Please manually add the following to your CSS file:\n', 'yellow');
    log('   @import "tailwindcss";', 'bold');
    log('   @source "../node_modules/@neoptocom/neopto-ui/src";', 'bold');
    log('   @import "@neoptocom/neopto-ui/styles";\n', 'bold');
  }

  log('\n╔══════════════════════════════════════════╗', 'green');
  log('║           Setup Complete! 🎉             ║', 'green');
  log('╚══════════════════════════════════════════╝\n', 'green');

  log('Next steps:', 'blue');
  log('  1. Import your CSS file in your main entry file', 'reset');
  log('  2. Start using components:', 'reset');
  log('     import { Button, Input } from "@neoptocom/neopto-ui";\n', 'bold');
  
  log('📚 Documentation: https://github.com/neoptocom/neopto-ui', 'blue');
  log('💡 Need help? Check CONSUMER_SETUP.md in node_modules/@neoptocom/neopto-ui', 'blue');
  log('🔧 Run this setup again anytime with: npx neopto-ui\n', 'blue');
}

main().catch((error) => {
  log(`\n❌ Error: ${error.message}`, 'red');
  process.exit(1);
});

