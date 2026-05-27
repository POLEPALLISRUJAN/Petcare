import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Use the repository name with correct case for GitHub Pages
  base: "/Petcare/",
  plugins: [react()]
})
