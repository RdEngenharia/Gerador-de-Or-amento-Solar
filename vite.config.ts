import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Gerador-de-Or-amento-Solar/', 
  resolve: {
    alias: {
      // Como não tem pasta src, o @ aponta para a raiz
      '@': path.resolve(__dirname, './'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
