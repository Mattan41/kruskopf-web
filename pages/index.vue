<template>
  <div>
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Hi, I'm <span class="text-accent">Mats Kruskopf</span>
          </h1>
          <p
            class="text-xl lg:text-2xl text-foreground-muted mb-8 max-w-3xl mx-auto"
          >
            Software developer, former audiologist, musician, and TTRPG
            enthusiast. Building web applications in my spare time to support my
            hobbies.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
              to="/projects"
              class="px-8 py-4 bg-accent-solid text-white rounded-lg hover:bg-accent-solid/90 transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              View My Projects
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="px-8 py-4 bg-surface text-accent border-2 border-accent rounded-lg hover:bg-accent-soft transition-colors font-semibold"
            >
              About Me
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-16 bg-surface-muted">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p class="text-foreground-muted">Check out some of my recent work</p>
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
            class="inline-block px-6 py-3 bg-accent-solid text-white rounded-lg hover:bg-accent-solid/90 transition-colors font-semibold"
          >
            View All Projects →
          </NuxtLink>
          <p class="mt-6">
            <NuxtLink to="/about" class="text-accent hover:underline">
              See the full toolbox →
            </NuxtLink>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { featuredProjects } = useProjects()
</script>
