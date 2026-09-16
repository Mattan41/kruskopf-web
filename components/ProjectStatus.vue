<template>
  <div v-if="status" class="project-status mb-6">
    <span
        class="inline-block px-3 py-1 text-sm font-medium rounded-full border"
        :class="badge.class"
    >
      {{ badge.text }}
    </span>
    <!-- Only academic projects carry the educational context; the ongoing badge is self-explanatory. -->
    <p v-if="status === 'academic'" class="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  status: {
    type: String,
    required: true
  }
})

const { getStatusBadge, getStatusDescription } = useProjects()

const badge = computed(() => getStatusBadge(props.status))
const description = computed(() => getStatusDescription(props.status))
</script>

<style scoped>
.project-status {
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
}
</style>