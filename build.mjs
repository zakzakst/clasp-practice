import esbuild from "esbuild";

await esbuild.build({
  bundle: true,
  entryPoints: ["src/index.ts"],
  format: "cjs",
  outfile: "dist/index.js",
  platform: "browser",
  target: "es2019",
  treeShaking: false,
});
