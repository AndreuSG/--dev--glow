import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/glow/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
