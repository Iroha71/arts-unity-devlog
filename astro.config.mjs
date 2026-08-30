// @ts-check
import { defineConfig } from "astro/config";
import { readFileSync } from "node:fs";

import react from "@astrojs/react";

const pkg = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf-8")
);

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    define: {
      __APP_VERSION__: JSON.stringify(pkg.version),
    },

    css: {
      preprocessorOptions: {
        scss: {
          // Bootstrap 5.3.8 の SCSS が Sass の if() を多用しており、
          // 自プロジェクト側では修正できないため依存側の警告を抑制する
          quietDeps: true,
          silenceDeprecations: [
            "if-function",
            "import",
            "global-builtin",
            "color-functions",
          ],
        },
      },
    },
  },
});
