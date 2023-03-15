import { crx } from '@crxjs/vite-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import manifest from './manifest.json'

const srcDir = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), crx({ manifest })],
  resolve: {
    alias: {
      src: srcDir,
    },
  },
  build: {
    rollupOptions: {
      input: {
        launcher: resolve(srcDir, 'launcher/launcher.html'),
      },
      output: {
        chunkFileNames: 'src/js/[name].js',
        entryFileNames: 'src/js/[name].js',
        assetFileNames: 'src/[ext]/[name].[ext]',
      },
    },
  },
})
