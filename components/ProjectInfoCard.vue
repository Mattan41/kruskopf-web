<template>
  <div class="p-4 rounded-lg bg-surface-muted border border-subtle">
    <h3 class="font-semibold mb-2 text-foreground" :class="headingClass">
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
