/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build:
    process.env.NODE_ENV === 'development'
    ? {}
    : {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'vue-visually-hidden'
      },
      rollupOptions: {
        external: ['vue', 'vue-demi'],
        output: {
          globals: {
            vue: 'Vue',
            'vue-demi': 'vueDemi'
          }
        }
      }
    }
})
