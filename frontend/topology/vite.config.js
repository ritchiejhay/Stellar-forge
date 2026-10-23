import { defineConfig } from 'vite';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Vite config for the quorum topology demo (issue #288).
// `vite demo` from frontend/topology serves ./demo as the web root.
export default defineConfig({
  root: 'demo',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'es2022',
  },
  server: {
    port: 5180,
  },
});
