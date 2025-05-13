import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/IbraheemA05.github.io/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});