import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
     tailwindcss(),
    vue(),
    vueDevTools(),
  ],
    resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  /* resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }, */
})
