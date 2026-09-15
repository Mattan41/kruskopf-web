<template>
  <article class="project-detail max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NuxtLink to="/projects" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-4">Unseen Servant</h1>
    <p class="mb-6 text-lg leading-relaxed">
      This project started as my exam work at IT-Högskolan but lives on as a hobby project, built with Vue 3 and Spring Boot JPA to MySQL.
      Currently hosted locally on Mini-PC with Cloudflare tunnel out to the internet.
    </p>

    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full">Vue.js</span>
      <span class="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 rounded-full">Spring Boot</span>
      <span class="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 rounded-full">MySQL</span>
      <span class="px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200 rounded-full">Docker</span>
    </div>

    <div class="mt-8 text-center">
      <p class="italic text-gray-600 dark:text-gray-400 mb-4">
        Access restricted – only whitelisted accounts can log in.
      </p>
          <div class="flex gap-4 mt-8">
      <a
          href="https://unseenservant.se"
          target="_blank"
          class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Try it Live
      </a>
      <a
          href="https://github.com/Mattan41/unseenservant-backend"
          target="_blank"
          class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
      >
        View backend on GitHub
      </a>
      <a
          href="https://github.com/Mattan41/unseenservant-frontend"
          target="_blank"
          class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
      >
        View frontend on GitHub
      </a>
    </div>
    </div>
  </article>
</template>
