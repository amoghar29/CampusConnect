import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const PORT = process.env.PORT
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT,
  },
});
