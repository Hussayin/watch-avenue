import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "public", // Public fayllarni to‘g‘ri serve qilish uchun
  server: {
    watch: {
      usePolling: true,
    },
  },
});
