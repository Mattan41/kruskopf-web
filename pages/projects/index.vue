<template>
  <div class="projects-page p-8 bg-white dark:bg-gray-900 min-h-screen">
    <div class="w-full">
      <h1 class="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        My Projects
      </h1>
      <div class="projects-grid">
        <ProjectCard
            v-for="project in projects"
            :key="project.slug"
            :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { projects } = useProjects()
</script>

<style scoped>
.projects-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
