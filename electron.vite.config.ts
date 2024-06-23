import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@rsrc': resolve('src/renderer/src'),
        '@preload': resolve('src/preload'),
        '@main': resolve('src/main'),
        '@stores': resolve('src/renderer/src/stores'),
        '@components': resolve('src/renderer/src/components'),
        '@utils': resolve('src/renderer/src/utils'),
        '@hooks': resolve('src/renderer/src/hooks'),
        '@pages': resolve('src/renderer/src/pages'),
        '@styles': resolve('src/renderer/src/styles')
      }
    },
    plugins: [react()]
  }
})
