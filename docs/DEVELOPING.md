# Developing

Notes for working on this site.

## Styling

Everything lives in `assets/main.css`, loaded once from `nuxt.config.ts`, in a
fixed order:

1. `@tailwind base`
2. design tokens (`:root` plus a `prefers-color-scheme: dark` override)
3. base element styles
4. `@tailwind components` and `@tailwind utilities`

Custom styles therefore sit **before** the utilities, so nothing depends on the
order the files are loaded in.

The tokens are raw RGB channels, exposed to Tailwind as semantic colours in
`tailwind.config.js`: `accent`, `accent-solid`, `accent-soft`, `surface`,
`surface-muted`, `foreground`, `foreground-muted` and `subtle`. Because the
values flip inside the media query, a component writes `bg-surface-muted` once
instead of pairing every colour with a `dark:` variant:

```html
<div class="border border-subtle bg-surface-muted text-foreground"></div>
```

Dark mode follows the operating system (`darkMode: 'media'`), so there is no
theme switcher. Deliberately **not** tokenised: the multi-hue tag and status
palettes (they express categories, not brand colours), decorative gradients and
the third-party brand buttons.

## Adding a project

1. Add an entry to the `projects` array in `composables/useProjects.ts`:

```js
{
  slug: 'my-project',
  title: 'My Project',
  shortDescription: 'One or two sentences shown on the card.',
  tags: ['Vue.js', 'MySQL'],
  repoLink: 'https://github.com/Mattan41/my-project',
  link: 'https://my-project.example.org',
  status: 'ongoing', // 'ongoing' | 'academic' | 'completed'
  featured: true, // shows on the homepage
  category: 'full-stack' // 'frontend' | 'backend' | 'full-stack'
}
```

2. Create `pages/projects/<slug>.vue` and compose it from the shared blocks:

```vue
<template>
  <ProjectDetail title="My Project" status="ongoing" :tags="tags">
    <ProjectSection title="About the project">
      <ProjectProse>What it is and why it exists.</ProjectProse>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink href="https://example.org" variant="primary">
        Live ↗
      </ProjectActionLink>
    </template>
  </ProjectDetail>
</template>
```

3. Visibility rules: a project appears on the homepage only with
   `featured: true`, and in the academic archive only with `featured: false`
   **and** `status: 'academic'`.

The shared components are auto-imported, so no import statements are needed:
`ProjectDetail`, `ProjectSection`, `ProjectProse`, `ProjectInfoCard`,
`ProjectList`, `ProjectCallout`, `ProjectActionLink`, `ProjectTag`,
`ProjectCard`, `ProjectStatus` and `ProjectBadge`.

## Code style

Prettier is configured with no semicolons, single quotes and no trailing commas.
Run `npm run format` before committing; `npm run lint` applies the ESLint rules.

## Notes

- `src/` is a leftover from the earlier Vue Router single-page version of this
  site. Nothing in the Nuxt app imports it.
- `npm run generate` also leaves a `dist` symlink pointing at `.output/public`.
  `.gitignore` only ignores `dist/`, so the symlink shows up as an untracked
  file.
- Deployment is manual: `npm run generate`, then publish `.output/public` to any
  static host. There is no CI/CD configured in the repository.
