import { defineConfig } from "vite";

export default defineConfig({
  root: __dirname + "/unpackage/dist/build",
  build: {
    outDir: "h5",
  },
});
