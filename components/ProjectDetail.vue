<template>
  <article
    class="project-detail max-w-7xl mx-auto p-4 sm:p-8 bg-surface text-foreground"
  >
    <NuxtLink
      to="/projects"
      class="text-accent hover:underline mb-4 inline-block"
    >
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
      {{ title }}
    </h1>

    <ProjectStatus :status="status" />

    <div v-if="tags.length" class="flex flex-wrap gap-2 mb-6">
      <ProjectTag
        v-for="tag in tags"
        :key="tag.label"
        :label="tag.label"
        :color="tag.color"
      />
    </div>

    <slot />

    <div v-if="$slots.actions" class="flex flex-wrap gap-4 mt-8">
      <slot name="actions" />
    </div>
  </article>
</template>

<script setup lang="ts">
import type { TagColor } from '~/composables/useProjects'

withDefaults(
  defineProps<{
    title: string
    status: string
    tags?: { label: string; color?: TagColor }[]
  }>(),
  { tags: () => [] }
)
</script>
