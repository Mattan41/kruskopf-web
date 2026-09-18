<template>
  <ul
    class="list-disc list-outside space-y-1 text-gray-700 dark:text-gray-300"
    :class="sizeClass"
  >
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** `base` for the main feature cards, `sm` for the denser architecture columns. */
    size?: 'base' | 'sm'
  }>(),
  { size: 'base' }
)

const sizeClass = computed(() =>
  props.size === 'sm' ? 'ml-4 text-sm' : 'ml-5 text-sm sm:text-base'
)
</script>
