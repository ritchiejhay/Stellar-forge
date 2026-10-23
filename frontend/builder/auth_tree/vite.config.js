import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [react()],
  root: '.',
  server: {
    port: 5176,
    strictPort: false,
  },
  build: {
    outDir: '../dist/auth_tree',
    emptyOutDir: true,
  },
});
