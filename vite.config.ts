import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Deploy path on GitHub Pages
  base: '/Resume/',
  build: {
    // Match gh-pages deploy script which publishes the 'dist' folder
    outDir: 'dist'
  }
})