import "dotenv/config";
import esbuild from "esbuild";

await esbuild.build({
  bundle: true,
  define: {
    // NOTE: `JSON.stringify`は必要 ※利用しないと文字列の前後にダブルコートがつかない
    "process.env.SHEET_ID": JSON.stringify(process.env.SHEET_ID ?? ""),
  },
  entryPoints: ["src/index.ts"],
  format: "cjs",
  outfile: "dist/index.js",
  platform: "browser",
  target: "es2019",
  treeShaking: false,
  minifySyntax: true,
  minifyWhitespace: true,
});
