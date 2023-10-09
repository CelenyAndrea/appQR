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
  // root: 'src',
  // build: {
  //   outDir: '../dist'
  // }
})
