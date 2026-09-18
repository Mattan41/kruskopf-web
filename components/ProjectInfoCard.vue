<template>
  <div
    class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
  >
    <h3
      class="font-semibold mb-2 text-gray-800 dark:text-gray-200"
      :class="headingClass"
    >
      {{ title }}
    </h3>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    /** `base` is used by the three-column architecture columns. */
    headingSize?: 'lg' | 'base'
  }>(),
  { headingSize: 'lg' }
)

const headingClass = computed(() =>
  props.headingSize === 'base' ? 'text-base' : 'text-lg'
)
</script>
