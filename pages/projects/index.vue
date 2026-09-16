<template>
  <div class="projects-page p-8 bg-white dark:bg-gray-900 min-h-screen">
    <div class="w-full">
      <section class="mb-16">
        <h1
          class="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100"
        >
          My Projects
        </h1>
        <p class="text-center text-gray-600 dark:text-gray-300 mb-12">
          Featured projects I build, run and actively maintain.
        </p>
        <div class="projects-grid">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.slug"
            :project="project"
            :featured="project.featured"
          />
        </div>
      </section>

      <hr class="border-gray-200 dark:border-gray-700 mb-16" >

      <section>
        <h2
          class="text-3xl font-bold mb-4 text-center text-slate-700 dark:text-slate-300"
        >
          Academic &amp; Educational Archive
        </h2>
        <p class="text-center text-slate-600 dark:text-slate-400 mb-12">
          Built during my studies at IT-Högskolan — kept here as an educational
          archive.
        </p>
        <div class="projects-grid opacity-95">
          <ProjectCard
            v-for="project in academicProjects"
            :key="project.slug"
            :project="project"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const { featuredProjects, academicProjects } = useProjects();
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
