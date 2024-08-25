import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// ? Custom configuration to view website on mobile
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allows access from any network interface
    port: 3000, // Optional: specify the port you want to use
  },
    plugins: [react()],
});