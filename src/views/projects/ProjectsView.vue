<template>
  <div class="projects p-4">
    <div v-for="project in projects" :key="project.id"
         class="project-card mb-6 p-4 border rounded hover:shadow-lg transition-shadow duration-300">
      <RouterLink :to="{ name: 'projectdetails', params: { id: project.id }, query: { title: project.title, description: project.description, link: project.link, repoLink: project.repoLink, repoName: project.repoName, otherLink: project.otherLink } }" class="text-blue-500 hover:underline">
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
      </RouterLink>
      <p class="text-gray-600">{{ project.shortDescription }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import projectsData from '../../public/data.json';

const projects = ref(projectsData);
</script>

<style>
@media (min-width: 1024px) {
  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>