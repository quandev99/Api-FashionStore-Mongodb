import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  server: {
    port: +(3000 || process.env.PORT),
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",

      appPath: "./src/app.js",

      exportName: "viteNodeApp",

      tsCompiler: "esbuild",

      swcOptions: {},
    }),
  ],
  optimizeDeps: {},
});
