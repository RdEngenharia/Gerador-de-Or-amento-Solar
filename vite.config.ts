import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Mudamos de './' para o caminho real da subpasta
  base: '/Gerador-de-Or-amento-Solar/', 
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
