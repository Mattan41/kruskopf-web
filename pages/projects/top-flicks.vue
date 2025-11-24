<template>
  <article class="project-detail max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NuxtLink to="/projects" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-4">Top Flicks</h1>

    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">HTML</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">CSS</span>
      <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">JavaScript</span>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">About the Project</h2>
      <p class="text-lg leading-relaxed mb-4">
        Top Flicks is a school project web application built with HTML, CSS, and JavaScript
        for browsing and managing your favorite movies.
      </p>
      <p class="text-lg leading-relaxed">
        Users can register, log in, search for movies, and add them to their favorites.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>User registration and authentication</li>
        <li>Movie search functionality</li>
        <li>Favorites management</li>
        <li>Responsive design</li>
      </ul>
    </section>

    <div class="flex gap-4 mt-8">
      <a
          href="https://topflicks.kruskopf.org/"
          target="_blank"
          class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Try it Live
      </a>
      <a
          href="https://github.com/Mattan41/labb-html-css-javascript"
          target="_blank"
          class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
      >
        View on GitHub
      </a>
    </div>
  </article>
</template>