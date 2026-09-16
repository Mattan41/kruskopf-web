<template>
  <article
    class="project-detail max-w-7xl mx-auto p-4 sm:p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <NuxtLink
      to="/projects"
      class="text-blue-500 hover:underline mb-4 inline-block"
    >
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-3xl sm:text-4xl font-bold mb-4">This Website</h1>

    <ProjectStatus status="ongoing" />

    <div class="flex flex-wrap gap-2 mb-6">
      <span
        class="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 rounded-full text-sm sm:text-base"
        >Nuxt 3</span
      >
      <span
        class="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 rounded-full text-sm sm:text-base"
        >Vue.js</span
      >
      <span
        class="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm sm:text-base"
        >Tailwind CSS</span
      >
      <span
        class="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm sm:text-base"
        >TypeScript</span
      >
      <span
        class="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm sm:text-base"
        >File-based Routing</span
      >
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">About the Project</h2>
      <p
        class="text-base sm:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300"
      >
        This website serves as a showcase for my development projects and
        technical skills. Built with Nuxt 3, it demonstrates modern web
        development practices and clean architecture.
      </p>
      <p
        class="text-base sm:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300"
      >
        The site was originally built with Vue 3 and Vue Router, but I migrated
        it to Nuxt 3 to leverage server-side rendering, better SEO, and
        simplified routing through file-based conventions.
      </p>
      <p
        class="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
      >
        You're currently viewing this very project!
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
      <ul
        class="list-disc list-outside ml-5 space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300"
      >
        <li>Responsive design that works on all devices</li>
        <li>File-based routing with Nuxt pages directory</li>
        <li>Reusable components (ProjectCard, ProjectStatus)</li>
        <li>Composables for shared logic and data</li>
        <li>Dynamic project pages with individual content</li>
        <li>Tailwind CSS for rapid styling</li>
        <li>SEO-optimized with proper meta tags</li>
        <li>Dark mode support (inherited from base CSS)</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technical Journey</h2>

      <div class="space-y-4">
        <div>
          <h3
            class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200"
          >
            Original Stack
          </h3>
          <ul
            class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300"
          >
            <li>Vue 3 with Composition API</li>
            <li>Vue Router for manual routing configuration</li>
            <li>Vite as build tool</li>
            <li>JSON file for project data</li>
          </ul>
        </div>

        <div
          class="bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 p-4 rounded-lg"
        >
          <h3
            class="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-300"
          >
            Migration to Nuxt 3
          </h3>
          <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-2">
            Refactored the entire application to use Nuxt 3 conventions:
          </p>
          <ul
            class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300"
          >
            <li>Replaced Vue Router with file-based routing</li>
            <li>Converted JSON data to TypeScript composables</li>
            <li>Created layouts for consistent page structure</li>
            <li>Implemented dedicated pages for each project</li>
            <li>Optimized for SSR and better SEO</li>
          </ul>
        </div>

        <div>
          <h3
            class="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200"
          >
            Current Architecture
          </h3>
          <ul
            class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300"
          >
            <li>
              <code
                class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm sm:text-base"
                >/pages</code
              >
              - File-based routing
            </li>
            <li>
              <code
                class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm sm:text-base"
                >/components</code
              >
              - Reusable Vue components
            </li>
            <li>
              <code
                class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm sm:text-base"
                >/composables</code
              >
              - Shared logic and data
            </li>
            <li>
              <code
                class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm sm:text-base"
                >/layouts</code
              >
              - Page templates
            </li>
            <li>
              <code
                class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm sm:text-base"
                >/assets</code
              >
              - Styles and static content
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Design Decisions</h2>
      <ul
        class="list-disc list-outside ml-5 space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300"
      >
        <li>
          <strong>Composables over JSON:</strong> Type-safe data management with
          better IDE support
        </li>
        <li>
          <strong>Dedicated pages:</strong> Each project gets its own page for
          detailed content
        </li>
        <li>
          <strong>Component-driven:</strong> Reusable ProjectCard and
          ProjectStatus components
        </li>
        <li>
          <strong>Tailwind CSS:</strong> Utility-first CSS for rapid development
        </li>
        <li>
          <strong>Scalable structure:</strong> Easy to add new projects without
          code changes
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technologies Used</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <h3
            class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200"
          >
            Framework & Tools
          </h3>
          <ul
            class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300"
          >
            <li>Nuxt 3</li>
            <li>Vue.js 3</li>
            <li>TypeScript</li>
            <li>Vite</li>
          </ul>
        </div>
        <div>
          <h3
            class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200"
          >
            Styling
          </h3>
          <ul
            class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300"
          >
            <li>Tailwind CSS</li>
            <li>PostCSS</li>
            <li>Autoprefixer</li>
            <li>Custom CSS variables</li>
          </ul>
        </div>
      </div>
    </section>

    <div
      class="bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-500 p-4 mb-8"
    >
      <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300">
        This very page you're reading is part of the project being described!
        It's a recursive portfolio that documents itself.
      </p>
    </div>

    <div class="flex gap-4 mt-8">
      <a
        href="https://kruskopf.org"
        target="_blank"
        class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        View Live Site
      </a>
      <a
        href="https://github.com/Mattan41/kruskopf-web"
        target="_blank"
        class="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
      >
        View on GitHub
      </a>
    </div>
  </article>
</template>
