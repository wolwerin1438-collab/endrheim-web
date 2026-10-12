// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://endrheim.com',
  output: 'static',
  trailingSlash: 'ignore',
  // v1 ships English only; add 'sk' / 'cs' here when translations exist.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: { prefixDefaultLocale: false },
  },
});
