import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/Portifolio/', // Add this line for GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: false // Optional: disable for smaller build
  }
})