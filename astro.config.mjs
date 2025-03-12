import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    build: {
      minify: false,
    },
  },
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/apcsp-portfolio-BillyLan/', // Set the base URL for GitHub Pages
});