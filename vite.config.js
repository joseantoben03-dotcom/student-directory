import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace <repo-name> with your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/https://joseantoben03-dotcom.github.io/student-directory//'
})
