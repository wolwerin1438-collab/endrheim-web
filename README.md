# endrheim-web

Website of **Endrheim**, a curated Skyrim Special Edition modlist installed with Wabbajack.
Static site built with [Astro](https://astro.build), served by Cloudflare Workers static assets at <https://endrheim.com>.

## Develop

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev      # local dev server
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

## Structure

| Path | Content |
|---|---|
| `src/pages/` | pages (home, mod list, about and credits, 404) |
| `src/layouts/Base.astro` | shared layout: header, footer, theme bootstrap |
| `src/components/` | Dagaz emblem, rune line, dark/light toggle |
| `src/styles/global.css` | palette "Iron & Blood" (dark primary, light alternative), type scale |
| `src/data/` | mod list data — currently samples; replaced by the export from the build inventory |
| `public/` | static files (favicon) |
| `wrangler.jsonc` | Cloudflare Workers static-assets config |

Fonts are self-hosted via Fontsource (no third-party font CDN).
Languages: English now; the i18n config in `astro.config.mjs` is ready for Slovak and Czech.

## Licence

Site code: MIT. Endrheim name, logo, texts and media: all rights reserved. See [LICENSE](LICENSE).
