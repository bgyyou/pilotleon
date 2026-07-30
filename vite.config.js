import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (/node_modules[\\/]react(-dom)?[\\/]/.test(id) || id.includes('scheduler')) return 'react-vendor';
          if (id.includes('react-router')) return 'router';
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) return 'framer-motion';
          if (id.includes('i18next')) return 'i18n-vendor';
        }
      }
    }
  }
});
