<template>
  <article class="project-detail max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NuxtLink to="/projects" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-4">5e Encounter Builder</h1>

    <ProjectStatus status="ongoing" />

    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Vue.js</span>
      <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full">API</span>
      <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Gaming</span>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">About the Project</h2>
      <p class="text-lg leading-relaxed mb-4">
        This application is a school project designed as an encounter builder for the RPG system 5e.
        It is a web application built with Vue.js that utilizes the Open5e API.
      </p>
      <p class="text-lg leading-relaxed mb-4">
        The current functionality includes listing a handful of monsters and adding them to a combat list,
        and optionally create your own monster and add to combat. Combat list is stored in local storage.
      </p>
      <p class="text-lg leading-relaxed">
        Future development plans include extending the functionality to allow searching and filtering monsters,
        as well as saving monsters to a favorites list.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Browse monsters from Open5e API</li>
        <li>Create custom monsters</li>
        <li>Build combat encounters</li>
        <li>Local storage persistence</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technologies Used</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Vue.js 3</li>
        <li>Open5e API</li>
        <li>Local Storage API</li>
      </ul>
    </section>

    <div class="flex gap-4 mt-8">
      <a
          href="https://5eCombatEncounter.kruskopf.org"
          target="_blank"
          class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Try it Live
      </a>
      <a
          href="https://github.com/Mattan41/5eEncounterBuilder"
          target="_blank"
          class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
      >
        View on GitHub
      </a>
      <a
          href="https://open5e.com/api-docs"
          target="_blank"
          class="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors"
      >
        Open5e API Docs
      </a>
    </div>
  </article>
</template>