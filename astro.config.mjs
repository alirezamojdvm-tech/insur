import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://insur.hsc-co.ir',
  output: 'static',
  trailingSlash: 'ignore', // تغییر از 'always' به 'ignore'
  build: {
    format: 'directory',
  },
});