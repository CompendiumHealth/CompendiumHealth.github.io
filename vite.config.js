import path from "path";
import {defineConfig} from "vite";

export default {
  base: '/plot/'
}

export default defineConfig({
  root: "./test/plots",
  base: "/plot/",
  publicDir: path.resolve("./test"),
  resolve: {
    alias: {
      "@observablehq/plot": path.resolve("./src/index.js")
    }
  },
  server: {
    port: 8008,
    open: "/"
  }
});
