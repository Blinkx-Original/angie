import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import keystatic from '@keystatic/astro';

// Astro + Keystatic Cloud on Vercel
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [keystatic({})]
});
