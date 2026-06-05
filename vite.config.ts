import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    // SPA fallback: all routes serve index.html
    historyApiFallback: true,
  },
  preview: {
    // SPA fallback for vite preview
    historyApiFallback: true,
  },
});
