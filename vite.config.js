import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {fileURLToPath, URL} from 'node:url'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      layouts: '/src/layouts',
      views: '/src/views',
      assets: '/src/assets',
      routes: '/src/routes.js', 
      '@': fileURLToPath(new URL('./src',import.meta.url)),
    },
  },
})