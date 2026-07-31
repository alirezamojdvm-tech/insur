import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // این خط را اضافه کنید

export default defineConfig({
  site: 'https://insur.hsc-co.ir',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()], // این خط را اضافه کنید
});