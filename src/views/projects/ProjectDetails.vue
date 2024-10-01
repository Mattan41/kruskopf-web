<template>
  <div class="projectDetails">
    <h2 v-if="link.includes('#')">{{ title }}</h2>
    <h2 v-else>
      <a :href="link" target="_blank"
         class="project-link text-blue-500 no-underline rounded border border-blue-500 hover:bg-blue-500 hover:text-white">
        {{ title }}
      </a>
    </h2>

    <p>{{ "Description: " + description }}</p>
    <h4>Link to github repo:
      <a :href="repoLink" target="_blank" class="custom-link text-red-700 italic no-underline">
        {{ repoName }}
      </a>
    </h4>
    <div v-if="otherLink">
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
defineProps(['id', 'title', 'description', 'link', 'repoLink', 'repoName', 'otherLink']);
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
