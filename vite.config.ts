import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: "local",
      globalModulePaths: [/global.css$/],
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    preprocessorOptions: {
      scss: {
      },
      less: {
        javascriptEnabled: true,
      }
    },
    postcss: {
      plugins: [autoprefixer({
        overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
      })]
    }
  },
  build: {
    outDir: 'docs'
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
