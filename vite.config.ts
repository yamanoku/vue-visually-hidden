import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:
    process.env.NODE_ENV === 'development'
    ? {}
    : {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'vue-visually-hidden'
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
})
