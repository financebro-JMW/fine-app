import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.{spec,test}.ts'],
    exclude: [
      'node_modules',
      'dist',
      '.idea',
      '.git',
      '.cache',
      'temp',
      'coverage',
    ],
    watchExclude: ['**/node_modules/**, **/dist/**, **/temp/**'],
    watch: false,
    hookTimeout: 60000,
    testTimeout: 60000,
    // onConsoleLog: (log: string, type: 'stdout' | 'stderr') => false
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tests': path.resolve(__dirname, './__tests__'),
    },
  },
  esbuild: {
    target: 'node18',
  },
  plugins: [react()],
})
