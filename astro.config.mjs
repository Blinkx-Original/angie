import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';        // 👈 importa desde el paquete raíz
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'server',
  adapter: vercel(),                         // 👈 usa el adapter
  integrations: [keystatic({})]
});
