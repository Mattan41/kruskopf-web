<template>
  <div class="projectDetails p-4">
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <p class="mb-4">{{ "Description: " + description }}</p>
    <h4 class="mb-2">
      <a :href="repoLink" target="_blank" class="custom-link text-green-700 italic no-underline">
        Github repo: {{ repoName }}
      </a>
    </h4>
    <h4 v-if="!link.includes('#')">
      <a :href="link" target="_blank"
         class="text-green-500 no-underline rounded border border-green-700 hover:bg-green-500 hover:text-white">
        Try it yourself
      </a>
    </h4>
    <div v-if="otherLink" class="mb-4">
      <h4>External Resource:
        <a :href="otherLink" target="_blank" class="custom-link text-green-700 italic no-underline">
          {{ otherLink }}
        </a>
      </h4>
    </div>
    <RouterLink to="/projects"
                class="back-button text-blue-500 no-underline rounded border border-blue-500 hover:bg-blue-500 hover:text-white">
      Back to Projects
    </RouterLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const { title, description, link, repoLink, repoName, otherLink } = route.query;
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>