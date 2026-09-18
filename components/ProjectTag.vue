<template>
  <span class="px-3 py-1 rounded-full text-sm" :class="colorClass">
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TagColor } from '~/composables/useProjects'

const props = withDefaults(
  defineProps<{
    label: string
    color?: TagColor
  }>(),
  { color: 'blue' }
)

/**
 * Colour classes are returned as literal strings (never interpolated) so
 * Tailwind's content scanner can see them — the same pattern as
 * components/ProjectBadge.vue.
 */
const colorClass = computed(() => {
  switch (props.color) {
    case 'green':
      return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
    case 'purple':
      return 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200'
    case 'orange':
      return 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200'
    case 'yellow':
      return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200'
    case 'red':
      return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
    case 'slate':
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
    default:
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
  }
})
</script>
