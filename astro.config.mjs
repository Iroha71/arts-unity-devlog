// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Bootstrap 5.3.8 の SCSS が Sass の if() を多用しており、
          // 自プロジェクト側では修正できないため依存側の警告を抑制する
          quietDeps: true,
          silenceDeprecations: ['if-function', 'import', 'global-builtin', 'color-functions'],
        },
      },
    },
  },
});
