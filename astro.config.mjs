import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/guides/deploy/github/
// For a User/Org Pages site (username.github.io), base is '/'
// For a Project Pages site (username.github.io/repo), base is '/repo-name'
// ChuongDHA.github.io is a User Pages site → base = '/'

export default defineConfig({
  site: 'https://ChuongDHA.github.io',
  base: '/',
  output: 'static',
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
