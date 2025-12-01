import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  root: "docs",
  base: "/neopto-ui/docs/",
  build: {
    outDir: "../docs-dist",
    emptyOutDir: true,
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress dynamic import warnings from dependencies
        if (warning.code === 'DYNAMIC_IMPORT_VARS' || 
            warning.message?.includes('dynamic import')) {
          return;
        }
        warn(warning);
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  publicDir: "public",
  optimizeDeps: {
    // Suppress dynamic import warnings during dev
    exclude: [],
  },
});

