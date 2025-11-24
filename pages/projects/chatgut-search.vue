<template>
  <article class="project-detail max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NuxtLink to="/projects" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-4">Search Service for Chatgut</h1>
    <ProjectStatus status="academic" />
    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full">Java</span>
      <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full">Spring Boot</span>
      <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">Elasticsearch</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Kubernetes</span>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">About the Project</h2>
      <p class="text-lg leading-relaxed mb-4">
        A microservice I built in the chatgut organization,
        enabling users to search message content using Elasticsearch.
      </p>
      <p class="text-lg leading-relaxed mb-4">
        The service is built with Java and Spring Boot, providing fast and efficient
        full-text search capabilities for the messaging platform.
      </p>
      <p class="text-lg leading-relaxed">
        There is also a branch where deployment is done with Kubernetes, demonstrating
        modern cloud-native deployment practices.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Full-text search using Elasticsearch</li>
        <li>RESTful API design</li>
        <li>Microservice architecture</li>
        <li>Kubernetes deployment option</li>
        <li>Integration with messaging platform</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Java</li>
        <li>Spring Boot</li>
        <li>Elasticsearch</li>
        <li>Kubernetes (deployment)</li>
        <li>Docker</li>
      </ul>
    </section>

    <div class="flex gap-4 mt-8">
      <a
          href="https://github.com/chatgut/searchService3"
          target="_blank"
          class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
      >
        View on GitHub
      </a>
    </div>
  </article>
</template>
<script setup lang="ts">
</script>