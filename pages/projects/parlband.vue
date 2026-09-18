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

    <h1 class="text-3xl sm:text-4xl font-bold mb-4">Pärlband</h1>

    <ProjectStatus status="ongoing" />

    <div class="flex flex-wrap gap-2 mb-6">
      <span
        class="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
        >Next.js 16</span
      >
      <span
        class="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
        >TypeScript</span
      >
      <span
        class="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 rounded-full text-sm"
        >Tailwind CSS v4</span
      >
      <span
        class="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm"
        >Cloudflare D1 &amp; R2</span
      >
      <span
        class="px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm"
        >Pages Functions</span
      >
      <span
        class="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm"
        >Zustand</span
      >
    </div>

    <!-- About Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-3">About the Project</h2>
      <p
        class="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
      >
        A serverless full-stack web application built for the band Pärlband to
        manage and stream music, lyrics, and sheet music. Instead of running a
        conventional container or Node.js server, the frontend is compiled into
        a static export hosted on Cloudflare Pages, while all dynamic
        operations—relational data persistence, REST APIs, and media
        streaming—run entirely on Cloudflare's edge infrastructure.
      </p>
    </section>

    <!-- Key Highlights -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
        >
          <h3
            class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200"
          >
            Persistent Media Player
          </h3>
          <ul
            class="list-disc list-outside ml-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300"
          >
            <li>
              Single audio element surviving client-side route transitions
            </li>
            <li>
              Global state management (queue, playback, active track) via
              Zustand
            </li>
            <li>
              Play-count analytics with debounce rules (registers after 5s
              continuous playback)
            </li>
          </ul>
        </div>
        <div
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
        >
          <h3
            class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200"
          >
            Edge Admin &amp; Media Pipeline
          </h3>
          <ul
            class="list-disc list-outside ml-5 space-y-1 text-sm sm:text-base text-gray-700 dark:text-gray-300"
          >
            <li>
              Direct binary streaming to R2 object storage via Workers to avoid
              RAM buffering
            </li>
            <li>
              Automatic metadata synchronization linking R2 objects to SQL
              records
            </li>
            <li>
              Protected editor surface for songs, recordings, musicians, and
              credits
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Technical Architecture -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">
        Architecture &amp; Edge Infrastructure
      </h2>
      <div class="grid md:grid-cols-3 gap-4">
        <div
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
        >
          <h3
            class="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200"
          >
            Frontend Client
          </h3>
          <ul
            class="list-disc list-outside ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300"
          >
            <li>Next.js 16 App Router (static export)</li>
            <li>React &amp; TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
        >
          <h3
            class="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200"
          >
            Edge Backend
          </h3>
          <ul
            class="list-disc list-outside ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300"
          >
            <li>Cloudflare Pages Functions (REST API)</li>
            <li>Zero-latency cold starts with V8 isolates</li>
            <li>Stream-through payload handling</li>
          </ul>
        </div>

        <div
          class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
        >
          <h3
            class="text-base font-semibold mb-2 text-gray-800 dark:text-gray-200"
          >
            Storage &amp; Data
          </h3>
          <ul
            class="list-disc list-outside ml-4 space-y-1 text-sm text-gray-700 dark:text-gray-300"
          >
            <li>D1: Relational SQLite with versioned SQL migrations</li>
            <li>R2: S3-compatible asset storage via custom CDN domain</li>
            <li>Automatic primary/fallback recording queries</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Security Note -->
    <section class="mb-8">
      <div
        class="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 p-4 rounded-r-lg text-sm text-gray-700 dark:text-gray-300"
      >
        <strong class="text-gray-900 dark:text-gray-100"
          >Security &amp; Edge Auth:</strong
        >
        Administrative interfaces (<code>/admin</code>) and write endpoints
        (<code>/api/admin/*</code>) are secured at the edge using
        <strong>Cloudflare Zero Trust (Access)</strong>, enforcing identity
        verification prior to Worker invocation.
      </div>
    </section>

    <!-- Links / CTA -->
    <div class="flex flex-wrap gap-4 mt-8">
      <a
        href="https://parlband.kruskopf.org"
        target="_blank"
        rel="noopener noreferrer"
        class="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium text-sm sm:text-base"
      >
        Live Website ↗
      </a>

      <a
        href="https://github.com/Mattan41/parlband"
        target="_blank"
        rel="noopener noreferrer"
        class="px-5 py-2.5 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition font-medium text-sm sm:text-base"
      >
        View on GitHub ↗
      </a>
    </div>
  </article>
</template>
