<template>
  <section class="mb-8">
    <h2 v-if="title" class="text-2xl font-semibold mb-4">{{ title }}</h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
/**
 * Shared spacing wrapper for the blocks on a project detail page. Omitting
 * `title` renders a bare `<section>` — used for standalone callouts.
 */
defineProps<{ title?: string }>()
</script>
