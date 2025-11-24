<template>
  <div>
    <!-- Hero Section -->
    <section
        class="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Hi, I'm <span class="text-blue-600">Mats Kruskopf</span>
          </h1>
          <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer passionate about building modern web applications
            with Vue.js, Spring Boot, and cloud technologies.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
                to="/projects"
                class="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              View My Projects
            </NuxtLink>
            <NuxtLink
                to="/about"
                class="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-semibold"
            >
              About Me
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Technologies I Work With
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="p-6 border rounded-lg hover:shadow-lg transition-shadow text-center bg-white dark:bg-gray-800">
            <div class="text-4xl mb-2">⚡</div>
            <h3 class="text-center font-semibold text-gray-900 dark:text-gray-100">Vue.js</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">Modern frontend frameworks</p>
          </div>
          <div class="p-6 border rounded-lg hover:shadow-lg transition-shadow text-center bg-white dark:bg-gray-800">
            <div class="text-4xl mb-2">☕</div>
            <h3 class="text-center font-semibold text-gray-900 dark:text-gray-100">Java & Spring Boot</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">Backend development</p>
          </div>
          <div class="p-6 border rounded-lg hover:shadow-lg transition-shadow text-center bg-white dark:bg-gray-800">
            <div class="text-4xl mb-2">🐳</div>
            <h3 class="text-center font-semibold text-gray-900 dark:text-gray-100">Docker & GitHub</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">Containerization & deployment</p>
          </div>
          <div class="p-6 border rounded-lg hover:shadow-lg transition-shadow text-center bg-white dark:bg-gray-800">
            <div class="text-4xl mb-2">🗄️</div>
            <h3 class="text-center font-semibold text-gray-900 dark:text-gray-100">MySQL</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">Database management</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Featured Projects</h2>
          <p class="text-gray-600 dark:text-gray-300">Check out some of my recent work</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
              v-for="project in featuredProjects"
              :key="project.slug"
              :project="project"
          />
        </div>
        <div class="text-center mt-12">
          <NuxtLink
              to="/projects"
              class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors font-semibold"
          >
            View All Projects →
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const { projects } = useProjects()

// Show top 3 projects
const featuredProjects = computed(() => projects.slice(0, 3))
</script>
