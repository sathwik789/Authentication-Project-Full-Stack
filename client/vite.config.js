import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {},
  // This enables SPA fallback
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
