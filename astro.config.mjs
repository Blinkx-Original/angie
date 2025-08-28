import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';   // importa desde el paquete raíz
import keystatic from '@keystatic/astro';

export default defineConfig({
  output: 'server',                     // obligatorio para que exista /keystatic
  adapter: vercel(),
  integrations: [keystatic()]           // sin opciones; monta /keystatic
});
