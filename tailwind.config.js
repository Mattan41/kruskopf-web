module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      /**
       * Semantic colour tokens. The raw channel values live in assets/main.css
       * (:root plus a prefers-color-scheme override), so the same utility
       * resolves to the right colour in light and dark mode without needing a
       * `dark:` variant on every element. The <alpha-value> placeholder keeps
       * opacity modifiers such as `bg-surface/50` working.
       *
       * The multi-hue tag/badge palettes stay literal in their components:
       * they express categories, not brand colours, and would lose meaning if
       * they were funnelled through these tokens.
       */
      colors: {
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          solid: 'rgb(var(--accent-solid) / <alpha-value>)',
          soft: 'rgb(var(--accent-soft) / <alpha-value>)'
        },
        surface: {
          DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
          muted: 'rgb(var(--surface-muted) / <alpha-value>)'
        },
        foreground: {
          DEFAULT: 'rgb(var(--foreground) / <alpha-value>)',
          muted: 'rgb(var(--foreground-muted) / <alpha-value>)'
        },
        subtle: 'rgb(var(--border-subtle) / <alpha-value>)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
