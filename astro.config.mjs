import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [VitePWA()]
  },
  output: "server",
  adapter: node()
});