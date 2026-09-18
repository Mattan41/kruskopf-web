# Kruskopf Web

My personal portfolio — the projects I build and the stack I work with.

**[View it live → developer.kruskopf.org](https://developer.kruskopf.org)**

## Tech stack

- Nuxt 3 (Vue 3, Composition API, file-based routing)
- Tailwind CSS with semantic colour tokens, so light and dark mode need no
  per-component overrides
- Fully static export — no database, API or authentication
- ESLint and Prettier

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev   # http://localhost:3000
```

| Command            | Purpose                           |
| :----------------- | :-------------------------------- |
| `npm run generate` | Static export to `.output/public` |
| `npm run lint`     | ESLint with `--fix`               |
| `npm run format`   | Prettier with `--write`           |

The export in `.output/public` can be dropped on any static host.

## Project structure

```
components/    Shared project UI (ProjectCard, ProjectDetail, ProjectTag, ...)
composables/   useProjects() — the registry of all projects and their status
pages/         Routes; one detail page per project
```

See [docs/DEVELOPING.md](docs/DEVELOPING.md) for details.
