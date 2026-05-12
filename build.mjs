import 'dotenv/config';
import esbuild from "esbuild";

await esbuild.build({
  bundle: true,
  define: {
    "process.env.SHEET_ID": process.env.SHEET_ID ?? "",
  },
  entryPoints: ["src/index.ts"],
  format: "cjs",
  outfile: "dist/index.js",
  platform: "browser",
  target: "es2019",
  treeShaking: false,
});
