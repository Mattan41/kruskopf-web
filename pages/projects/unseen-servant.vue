<template>
  <article class="project-detail max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NuxtLink to="/projects" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-4">Unseen Servant</h1>
    <p class="mb-6 text-lg leading-relaxed">
      This project was my exam work at IT-Högskolan, built with Vue 3 and Spring Boot JPA to MySQL.
      Currently hosted locally on Raspberry Pi 5 with Docker and Cloudflare tunnel.
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
    </div>
  </article>
</template>
