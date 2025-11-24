<template>
  <NuxtLink
      :to="`/projects/${project.slug}`"
      class="project-card block p-6 rounded-lg transition-all duration-300 hover:shadow-xl
           border border-gray-200 hover:border-blue-400 dark:border-gray-700
           bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
  >
    <div class="mb-2">
      <ProjectBadge v-if="project.category" :category="project.category" />
    </div>

    <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
      {{ project.title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {{ project.shortDescription }}
    </p>
    <div class="flex flex-wrap gap-2">
      <span
          v-for="tag in project.tags"
          :key="tag"
          class="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 text-sm rounded-full"
      >
        {{ tag }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.project-card:hover {
  transform: translateY(-4px);
}
</style>
