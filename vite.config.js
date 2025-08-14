import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/student-directory/' // <-- Must be your repo name (case-sensitive)
})
