import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    appwriteUrl: JSON.stringify(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: JSON.stringify(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: JSON.stringify(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: JSON.stringify(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: JSON.stringify(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceApiKey: JSON.stringify(import.meta.env.VITE_TINYMCE_API_KEY),
  },
  base: '/BlogBurst/', // Replace 'your-repo-name' with your actual repository name
  build: {
    outDir: 'docs', // Change 'docs' to any other directory name if needed
  },
})
