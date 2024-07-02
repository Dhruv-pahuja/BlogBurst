import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: '/BlogBurst/', // Replace 'your-repo-name' with your actual repository name
  build: {
    outDir: 'build', // Change 'docs' to any other directory name if needed
  },
})
