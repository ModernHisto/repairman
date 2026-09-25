import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import vuetify from 'vite-plugin-vuetify';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/styles/index.scss" as *;`,
      }
    }
  },

  plugins: [
    vue(),
    svgLoader(),
    vuetify({
      autoImport: true,
      styles: { configFile: 'src/styles/_vuetify-variables.scss' }
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) 
    },
  },
  /* base: 'https://ModernHisto.github.io/Business-ard/', Путь ломает подгрузку некоторых элеметнов из public
  build: {
    outDir: 'dist'
  } */
})
