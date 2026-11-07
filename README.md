# J and B Barista Academy

Marketing site for J and B Barista Academy, a specialty coffee school in Hetauda, Nepal. Built as a Next.js App Router project with a token-driven Tailwind CSS v4 theme.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4 via `@tailwindcss/postcss`
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    layout.tsx      root layout, metadata, nav and footer
    page.tsx        homepage: hero, programs, academy, stories
    globals.css     palette, semantic tokens, component primitives
  components/
    layout/
      NavBar.tsx    sticky navigation with an accessible mobile menu
      Footer.tsx    contact details and link columns
public/
  images/           photography used on the homepage
```

## Design tokens

Colour values exist in exactly one place: the `--palette-*` custom properties in `src/app/globals.css`. Everything else references semantic tokens (`--color-surface`, `--color-ink`, `--color-brand`, `--color-border`) exposed to Tailwind through `@theme inline`, so components never carry raw hex values or arbitrary pixel sizes.

Component primitives such as `.btn`, `.btn-primary`, `.btn-secondary`, `.eyebrow`, and `.surface-card` live in the `components` layer of the same file.

## Images

Photography is downloaded locally to `public/images` and served through `next/image` with responsive `srcSet` output. No remote image hosts are configured, so the site renders without any external network dependency.

## Contact

- Email: Jbaristaacademy@gmail.com
- Phone: +977 9855018029
- Hetauda, Bagmati Province, Nepal
