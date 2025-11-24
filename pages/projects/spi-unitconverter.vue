<template>
  <article class="project-detail max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NuxtLink to="/projects" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-4">SPI Unit Converter</h1>

    <ProjectStatus status="academic" />

    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full">Java</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">SPI</span>
      <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Design Patterns</span>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">About the Project</h2>
      <p class="text-lg leading-relaxed mb-4">
        This Java application is built with the Service Provider Interface (SPI) pattern,
        demonstrating advanced Java design patterns and modular architecture.
      </p>
      <p class="text-lg leading-relaxed mb-4">
        The program allows users to select from various Converter implementations to
        perform conversions between different units.
      </p>
      <p class="text-lg leading-relaxed">
        The application includes a simple command-line interface for user input and output,
        showcasing the flexibility and extensibility of the SPI pattern.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Service Provider Interface (SPI) architecture</li>
        <li>Multiple converter implementations</li>
        <li>Pluggable converter modules</li>
        <li>Command-line interface</li>
        <li>Extensible design for adding new converters</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Design Patterns</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Service Provider Interface (SPI)</li>
        <li>Strategy Pattern</li>
        <li>Factory Pattern</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Java</li>
        <li>Java SPI</li>
        <li>ServiceLoader API</li>
      </ul>
    </section>

    <div class="flex gap-4 mt-8">
      <a
          href="https://github.com/Mattan41/SPI-unitconverter"
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