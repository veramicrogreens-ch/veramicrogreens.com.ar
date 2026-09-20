# Vera Microgreens

One-page commercial website for Vera Microgreens, focused on decorative microgreens for restaurants.

## Stack

- Astro
- TypeScript
- Tailwind CSS 4 via `@tailwindcss/vite`
- Static output for Cloudflare Pages
- No database or backend

## Local

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Cloudflare Pages

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 20+

## Before publishing

Update `src/site.config.ts` with the final Instagram/Facebook links and any contact details. The supplied microgreens photo is already included in the project.
