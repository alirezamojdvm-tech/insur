// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // اگه Sitemap می‌خوای

export default defineConfig({
  // آدرس نهایی سایت (برای ساخت لینک‌های مطلق و Sitemap ضروریه)
  site: 'https://insur.hsc-co.ir',
  
  // افزونه‌ها (مثل Sitemap)
  integrations: [sitemap()],
  
  // (اختیاری) اگه می‌خوای خروجی کاملاً استاتیک باشه (پیش‌فرض Astro همینطوره)
  output: 'static',
});