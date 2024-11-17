import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

import autoprefixer from 'autoprefixer'
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';

const postcssPlugins: postcss.AcceptedPlugin[] = [
  tailwindcss(),
  autoprefixer({
    overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
  }),
  // postCssPxToRem({
  //   // 375px设计图
  //   rootValue: 16,
  //   propList: ['*', '!font-size', '!*font-size*'],
  //   selectorBlackList: [],
  //   replace: true,
  //   mediaQuery: false,
  //   minPixelValue: 0,
  // }),
]

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
      plugins: [
        ...postcssPlugins
      ]
    }
  },
  build: {
    outDir: 'docs'
  },
  server: {
    port: 8090
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
