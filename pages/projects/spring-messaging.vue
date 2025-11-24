<template>
  <article class="project-detail max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NuxtLink to="/projects" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-4">Spring Boot Messaging Application</h1>

    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full">Java</span>
      <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full">Spring Boot</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Thymeleaf</span>
      <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">MySQL</span>
      <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">HTMX</span>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">About the Project</h2>
      <p class="text-lg leading-relaxed mb-4">
        A group project I participated in, where we built a web-based messaging platform
        using Java, Spring Boot, and Thymeleaf.
      </p>
      <p class="text-lg leading-relaxed mb-4">
        It allows users to create, edit, and view messages. The application supports
        user authentication and authorization, message translation, and provides a
        user-friendly interface for managing messages.
      </p>
      <p class="text-lg leading-relaxed">
        It uses a MySQL database for data storage and integrates with various Spring Boot
        starters for functionality such as data access, security, and validation.
        Additionally, there is a branch that updates messages using HTMX.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>User authentication and authorization</li>
        <li>Create, edit, and delete messages</li>
        <li>Message translation support</li>
        <li>MySQL database integration</li>
        <li>Server-side rendering with Thymeleaf</li>
        <li>HTMX for dynamic updates (separate branch)</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Java</li>
        <li>Spring Boot (Data, Security, Validation)</li>
        <li>Thymeleaf</li>
        <li>MySQL</li>
        <li>HTMX (experimental branch)</li>
        <li>Spring Security</li>
      </ul>
    </section>

    <div class="flex gap-4 mt-8">
      <a
          href="https://github.com/Mattan41/springBootGroupProject"
          target="_blank"
          class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
      >
        View on GitHub
      </a>
    </div>
  </article>
</template>