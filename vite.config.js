import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
    assetsDir: 'etc',
    sourcemap: true,
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: 'etc/[name].[hash].js',
        chunkFileNames: 'etc/[name].[hash].js',
        assetFileNames: 'etc/[name].[hash].[ext]'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
