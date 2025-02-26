import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alejandrollanganate.com',
  base: '/',
  output: 'static',
  integrations: [
    tailwind(),
    icon({
      include: {
        // Incluye los sets de iconos que estés usando
        'mdi': ['*'],
        'fa': ['*'],
        // Agrega otros sets según necesites
      }
    })
  ],
  vite: {
    build: {
      charset: 'utf8',
    },
    resolve: {
      alias: {
        'three': 'three/build/three.module.js'
      }
    }
  }
});