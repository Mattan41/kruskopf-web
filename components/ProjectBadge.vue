<template>
  <span
      v-if="category"
      class="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full"
      :class="badgeClass"
  >
    {{ label }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  category: {
    type: String,
    required: false,
    default: ''
  }
})

const label = computed(() => {
  switch (props.category) {
    case 'frontend': return 'Frontend Project'
    case 'backend': return 'Backend Project'
    case 'full-stack': return 'Full-Stack Project'
    default: return props.category || ''
  }
})

const badgeClass = computed(() => {
  switch (props.category) {
    case 'frontend': return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
    case 'backend': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
    case 'full-stack': return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200'
    default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
  }
})
</script>
