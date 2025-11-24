<template>
  <article class="project-detail max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NuxtLink to="/projects" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-4">Jakarta Project with WildFly</h1>

    <ProjectStatus status="academic" />

    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full">Java</span>
      <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">Jakarta EE</span>
      <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full">WildFly</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Docker</span>
      <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full">REST API</span>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">About the Project</h2>
      <p class="text-lg leading-relaxed mb-4">
        This project is a Java-based application built with Jakarta EE and running on
        the WildFly application server.
      </p>
      <p class="text-lg leading-relaxed mb-4">
        The application includes comprehensive integration tests using Testcontainers
        and RestAssured to ensure robust and reliable functionality. Docker and Docker
        Compose are used to containerize the application and manage multi-container setups.
      </p>
      <p class="text-lg leading-relaxed">
        It allows users to perform CRUD (Create, Read, Update, Delete) operations on a
        collection of movies stored in a MySQL database.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>RESTful API with JAX-RS</li>
        <li>Full CRUD operations on movie database</li>
        <li>UUID-based entity identification</li>
        <li>JSON data exchange format</li>
        <li>Data Transfer Objects (DTOs)</li>
        <li>Comprehensive error handling</li>
        <li>Data validation</li>
        <li>Integration tests with Testcontainers</li>
        <li>Docker containerization</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Operations</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Create new movie entries</li>
        <li>Read all movies or specific movie by UUID</li>
        <li>Update existing movie details</li>
        <li>Delete movies by UUID</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Java</li>
        <li>Jakarta EE</li>
        <li>JAX-RS (RESTful Web Services)</li>
        <li>WildFly Application Server</li>
        <li>MySQL Database</li>
        <li>Docker & Docker Compose</li>
        <li>Testcontainers</li>
        <li>RestAssured (testing)</li>
        <li>JSON</li>
      </ul>
    </section>

    <div class="flex gap-4 mt-8">
      <a
          href="https://github.com/Mattan41/projektJakarta"
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