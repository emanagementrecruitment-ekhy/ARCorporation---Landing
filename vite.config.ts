import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Build SSR (prerender) hanya perlu kode server; jangan salin folder public (PDF, gambar) ke .ssr.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  build: { copyPublicDir: !isSsrBuild },
}));