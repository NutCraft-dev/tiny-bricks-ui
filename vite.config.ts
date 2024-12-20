/// <reference types="vitest" />
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // Specifies the entry point for building the library.
      name: "vite-react-ts-button", // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  test: {
    globals: true, // Enables support for global variables in tests.
    environment: "jsdom", // Sets the test environment to 'jsdom' for browser-like testing.
    setupFiles: "./src/setupTests.ts", // Specifies the setup file for testing.
  },
  plugins: [dts()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      utils: path.resolve(__dirname, "./src/utils"),
      types: path.resolve(__dirname, "./src/types"),
      context: path.resolve(__dirname, "./src/context"),
      icons: path.resolve(__dirname, "./src/icons"),
      stories: path.resolve(__dirname, "./src/stories"),
      variants: path.resolve(__dirname, "./src/variants"),
    },
    extensions: [".js", ".ts", ".tsx"],
  },
});
