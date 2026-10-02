# Simplified Solutions

Static marketing site for custom inventory management and POS software, built with [Astro](https://astro.build) (zero client JS framework, plain HTML/CSS output).

- `npm install`
- `npm run dev` for local development
- `npm run build` outputs the static site to `dist/` (deploy to Netlify, Cloudflare Pages, Vercel or GitHub Pages)

Contact email lives in `src/pages/index.astro` (`EMAIL` constant). Design tokens are in `src/styles/global.css`.

## Contact form
The form posts to [Web3Forms](https://web3forms.com) (free). Get an access key by entering the contact email there, then set `FORM_KEY` in `src/pages/index.astro`. With no key it falls back to opening the visitor's email app.
