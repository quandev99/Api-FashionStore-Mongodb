import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  server: {
    port: +(process.env.PORT || 3000),
    host: "0.0.0.0",
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
