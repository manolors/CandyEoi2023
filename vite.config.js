import { resolve } from "path";

const mode = process.env.NODE_ENV;
const base = "/";
export default {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    rollupOptions: {
      input: {
        main: resolve("src/index.html"),
        construcction: resolve("src/construccion.html"),

      },
    },
    outDir: "../dist",
    assetsDir: "./"
  }
};
