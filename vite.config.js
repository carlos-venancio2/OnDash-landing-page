import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import { config } from 'dotenv';

config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  server: {
    host: true,
    port: process.env.PORT || 4001,
    strictPort: true
  }
})
