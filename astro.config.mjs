import { defineConfig } from 'astro/config';

// For GitHub Pages project sites. Remove `base` if you move to a custom domain
// (and change `site` to that domain).
export default defineConfig({
  site: 'https://abdullahcse1428.github.io',
  base: '/simplified-solutions',
  output: 'static',
  build: { inlineStylesheets: 'always' },
});
