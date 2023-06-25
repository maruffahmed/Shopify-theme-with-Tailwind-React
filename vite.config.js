import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'
import react from '@vitejs/plugin-react'
import cleanup from '@by-association-only/vite-plugin-shopify-clean'

export default defineConfig({
  build: {
    emptyOutDir: false,
  },
  plugins: [cleanup(), shopify(), react()],
})
