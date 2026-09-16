<template>
  <NuxtLink
      :to="`/projects/${project.slug}`"
      class="project-card block p-6 rounded-lg transition-all duration-300 hover:shadow-xl border
           bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
      :class="cardBorderClass"
  >
    <div class="mb-2">
      <ProjectBadge v-if="project.category" :category="project.category" />
    </div>

    <div class="flex items-center gap-2 mb-2">
      <h3 class="text-xl font-semibold text-blue-600 dark:text-blue-400">
        {{ project.title }}
      </h3>
      <span
          v-if="isActive"
          class="inline-flex items-center gap-1.5 shrink-0 text-xs font-medium text-emerald-600 dark:text-emerald-400"
      >
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Active
      </span>
    </div>
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
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  featured: {
    type: Boolean,
    required: false,
    default: false
  }
})

const isActive = computed(() => props.featured || props.project.status === 'ongoing')

// Mutually exclusive branches keep Tailwind from emitting conflicting border utilities.
const cardBorderClass = computed(() =>
    isActive.value
        ? 'border-emerald-300 hover:border-emerald-400 dark:border-emerald-500/30 dark:hover:border-emerald-400'
        : 'border-gray-200 hover:border-blue-400 dark:border-gray-700'
)
</script>

<style scoped>
.project-card:hover {
  transform: translateY(-4px);
}
</style>
