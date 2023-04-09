import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, '/src/modules'),
      '@shared': path.join(__dirname, '/src/shared'),
      '@utils': path.join(__dirname, '/src/utils'),
      '@config': path.join(__dirname, '/src/config'),
    },
  },
  test: {
    clearMocks: true,
  },
});
