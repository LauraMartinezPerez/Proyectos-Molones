import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {open: true,},
  base: "/project-promo-48-module-3-team-3/",
});
