// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://carlosreyesm326.github.io',
  base: '/LA-GRIETA-LANDING-PAGE',
  vite: {
    plugins: [tailwindcss()]
  }
});