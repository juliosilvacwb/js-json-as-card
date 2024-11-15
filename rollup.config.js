import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import typescript2 from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts"; 

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts", 
    output: [
      {
        file: packageJson.main,
        format: "cjs", 
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm", 
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(), 
      resolve(),
      commonjs(),
      typescript(), 
      terser(), 
    ],
    external: ["react", "react-dom"], 
  },
  {
    input: "src/index.ts", 
    output: [{ file: "dist/index.d.ts", format: "esm" }], 
    plugins: [typescript2(), dts()],
  },
];
