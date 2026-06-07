import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true, // honor the localhost:3000 requirement; fail loudly if it's taken
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
        // SSE: do not buffer
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('Accept-Encoding', 'identity');
          });
        },
      },
    },
  },
});
