import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';   // <— paquete raíz
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'server',                      // <— obligatorio para /keystatic
  adapter: vercel(),
  integrations: [keystatic()]            // <— sin opciones, así de simple
});
