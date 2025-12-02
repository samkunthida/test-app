import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ถ้าหน้า Github Pages ของคุณคือ https://samkunthida.github.io/test-app/
  // ให้ตั้งเป็น '/test-app/' หรือ ใช้ './' หากต้องการพาธแบบ relative
  base: '/test-app/',
})