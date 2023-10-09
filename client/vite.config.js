import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }, {
      "plugins": ["react-refresh"],
      "rules": {
        "react-refresh/only-export-components": "warn"
      }
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://app-qr-api.vercel.app/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // root: 'src',
  // build: {
  //   outDir: '../dist'
  // }
})
