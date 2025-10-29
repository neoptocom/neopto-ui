import fs from "node:fs";

/**
 * Build the distributable CSS file with tokens and base styles
 * 
 * Note: This library uses Tailwind utility classes directly in components.
 * Consumers MUST have Tailwind CSS configured in their project.
 */

// Read tokens
const tokensCSS = fs.readFileSync("src/styles/tokens.css", "utf8");

// Create a minimal CSS file with just tokens and fonts
const distCSS = `/**
 * @neoptocom/neopto-ui - Design Tokens & Base Styles
 * 
 * ⚠️  IMPORTANT: This library requires Tailwind CSS v4 in your project.
 * 
 * Quick setup:
 *   1. Install: npm install -D tailwindcss @tailwindcss/postcss
 *   2. Create postcss.config.js with @tailwindcss/postcss plugin
 *   3. In your CSS file:
 *      @import "tailwindcss";
 *      @source "../node_modules/@neoptocom/neopto-ui/dist";
 *      @import "@neoptocom/neopto-ui/styles";
 * 
 * See: https://github.com/neoptocom/neopto-ui#installation
 */

${tokensCSS}

/* Material Symbols Font */
@font-face {
  font-family: 'Material Symbols Rounded';
  font-style: normal;
  font-weight: 100 700;
  src: url(https://fonts.gstatic.com/s/materialsymbolsrounded/v272/sykg-zNym6YjUruM-QrEh7-nyTnjDwKNJ_190FjzaqkNCeE.woff2) format('woff2');
  font-display: block;
}

.material-symbols-rounded {
  font-family: 'Material Symbols Rounded';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  color: inherit;
}

/* Unified Scrollbar Styles */
:root {
  --scrollbar-width: 6px;
  --scrollbar-thumb: #797980;
  --scrollbar-thumb-hover: #9C9C9C;
  --scrollbar-track: transparent;
}

.dark {
  --scrollbar-thumb: #4b4d59;
  --scrollbar-thumb-hover: #797980;
}

/* Default scrollbar - applies to most scrollable containers */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
}

*::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
}

*::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
  border-radius: 1rem;
}

*::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 1rem;
  border: 2px solid transparent;
  background-clip: padding-box;
}

*::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
  background-clip: padding-box;
}

/* Scrollbar width variants */
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.scrollbar-medium::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Hide scrollbar utility */
.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
`;

// Ensure dist directory exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist", { recursive: true });
}

// Write the final CSS
fs.writeFileSync("dist/styles.css", distCSS);

console.log("✓ built dist/styles.css (tokens + base styles)");

