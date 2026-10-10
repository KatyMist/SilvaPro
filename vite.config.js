import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        privacy: resolve(root, 'privacy/index.html'),
        notFound: resolve(root, '404.html'),
        terms: resolve(root, 'terms/index.html'),
        proektOsvoeniya: resolve(root, 'proekt-osvoeniya-lesov/index.html'),
        lesnayaDeklaratsiya: resolve(root, 'lesnaya-deklaratsiya/index.html'),
        lesnayaOtchetnost: resolve(root, 'lesnaya-otchetnost/index.html'),
      },
    },
  },
});