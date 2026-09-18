<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-block px-5 py-2.5 rounded-lg font-medium text-sm sm:text-base transition"
    :class="variantClass"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    href: string
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  }>(),
  { variant: 'primary' }
)

const variantClass = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-600'
    case 'ghost':
      return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
    case 'outline':
      return 'border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40'
    default:
      return 'bg-green-600 text-white hover:bg-green-700'
  }
})
</script>
