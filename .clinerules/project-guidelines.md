# Kruskopf Web — Project Guidelines

## What this is
A Nuxt 3 portfolio site, **fully static**: no database, no API, no authentication. Keep
it that way — do not introduce a runtime server dependency, an edge function or a
backend call.

## Read `docs/DEVELOPING.md` before touching layout or styling
It explains the stylesheet order and the token model. Update it in the same change as
the behaviour.

## Styling
- Tailwind CSS **v3** (not v4). Design tokens are raw RGB channels in
  `assets/main.css` and are exposed as semantic colours in `tailwind.config.js`:
  `accent`, `accent-solid`, `accent-soft`, `surface`, `surface-muted`, `foreground`,
  `foreground-muted`, `subtle`.
- Because the values flip inside the `prefers-color-scheme` block, write the semantic
  class **once** (`bg-surface-muted text-foreground`) instead of pairing every colour
  with a `dark:` variant. `darkMode: 'media'` — there is deliberately no theme switcher.
- Load order in `assets/main.css` matters: `@tailwind base`, then design tokens, then
  base element styles, then `@tailwind components` / `@tailwind utilities`. Custom
  styles sit before the utilities; do not move them.
- Deliberately **not** tokenised, and not to be "fixed": the multi-hue tag and status
  palettes (they express categories, not brand colours), decorative gradients, and the
  third-party brand buttons.

## Content
- Adding a project to the site means one entry in the `projects` array in
  `composables/useProjects.ts`, with the fields documented in `docs/DEVELOPING.md`
  (`slug`, `title`, `shortDescription`, `tags`, `repoLink`, `link`, `status`).
  Content lives in that data file, not in a component.

## Commands
- Node 20+. `npm run dev` (localhost:3000), `npm run build`, `npm run generate` (the
  static export), `npm run preview`, `npm run lint` (fixes), `npm run format`,
  `npm run clean`.
- No test suite; verify in the browser and say what was checked.
