<template>
  <div class="p-4 rounded-r-lg border-l-4" :class="[toneClass, sizeClass]">
    <!-- `mr-1` instead of a literal space keeps the title and body inline
         regardless of how the template gets reflowed. -->
    <strong
      v-if="title"
      class="mr-1 font-semibold text-gray-900 dark:text-gray-100"
      >{{ title }}:</strong
    ><slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    tone: 'info' | 'warning' | 'neutral'
    /** Rendered inline as a bold prefix, e.g. "Live Access:". */
    title?: string
    size?: 'sm' | 'base'
  }>(),
  { title: '', size: 'sm' }
)

const toneClass = computed(() => {
  switch (props.tone) {
    case 'warning':
      return 'bg-yellow-50 dark:bg-yellow-950/40 border-yellow-400 dark:border-yellow-500'
    case 'neutral':
      return 'bg-gray-50 dark:bg-gray-800 border-blue-500'
    default:
      return 'bg-blue-50 dark:bg-blue-950/30 border-blue-500'
  }
})

const sizeClass = computed(() =>
  props.size === 'base'
    ? 'text-sm sm:text-base text-gray-700 dark:text-gray-300'
    : 'text-sm text-gray-700 dark:text-gray-300'
)
</script>
