import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://vladi-rosp.github.io',
  base: '/vladimir-site',
});
