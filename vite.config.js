import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://azriwandi3.github.io/r7topup/',
  plugins: [react()],
})
