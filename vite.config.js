import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Randhir_portfolio/',   // 🔴 THIS IS THE FIX
})
