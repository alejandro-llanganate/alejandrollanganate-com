import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alejandrollanganate.com',
  base: '/',
  output: 'static',
  vite: {
    build: {
      charset: 'utf8',
    },
    ssr: {
      noExternal: ['three'],
    },
    optimizeDeps: {
      include: ['three'],
    },
  },
  integrations: [
    tailwind(),
  ],
});