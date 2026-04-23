import { defineConfig } from 'vite';

export default defineConfig({
  // Cloudflare pages hosts from the root in standard setups,
  // vite's default dist folder is perfect for it.
  build: {
    outDir: 'dist'
  }
});
