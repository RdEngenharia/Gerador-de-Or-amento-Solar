import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Gerador-de-Or-amento-Solar/', 
  resolve: {
    alias: {
      // Isso ajuda o Vite a encontrar o caminho /src de qualquer lugar
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});
