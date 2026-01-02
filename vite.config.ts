import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa'; // Adicione este plugin

export default defineConfig({
  // Mude de './' para o caminho exato do repositório
  base: '/Gerador-de-Or-amento-Solar/', 
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: false, // Ele vai usar o seu manifest.json da pasta public
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'], // Arquivos que ele vai salvar para funcionar OFFLINE
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin,
            handler: 'CacheFirst',
            options: {
              cacheName: 'static-assets',
            },
          },
        ],
      },
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
