import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    publicDir: 'static',
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  base: ''
})
