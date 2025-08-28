import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';        // 👈 paquete raíz
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [keystatic({})]
});
