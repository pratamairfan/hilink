import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  global: {},
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  preview: {
    port: 3001,
  },
});
