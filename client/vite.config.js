import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
      }   
    }
  },
  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }, {
      "plugins": ["react-refresh"],
      "rules": {
        "react-refresh/only-export-components": "warn"
      }
    }),
  ]
})
