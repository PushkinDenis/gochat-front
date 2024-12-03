import { defineConfig, loadEnv } from "vite";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), svgr(), checker({ typescript: true }), tsconfigPaths()],
    define: {
      "process.env": { ...process.env, ...env },
    },
  };
});
