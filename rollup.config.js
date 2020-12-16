import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";

const external = ["pdf-lib", "fs", "fs/promises"];

export default [
    {
        input: "./dist/index.js",
        output: {
            file: "./dist/index.esm.js",
            exports: "named",
            format: "esm",
        },
        external,
        //had to downgrade download this plugin to 13.0.0 because it was ignoring named exports and merging them all in a default export in the final bundled file
        //https://github.com/rollup/plugins/issues/556#issuecomment-683036655
        plugins: [commonjs()],
    },
    {
        input: "./dist/index.d.ts",
        output: {
            file: "./dist/index.esm.d.ts",
            format: "cjs",
        },
        external,
        plugins: [dts({ respectExternal: false })],
    },
];
