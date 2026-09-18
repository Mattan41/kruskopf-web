<template>
  <div v-if="status" class="mb-6 pb-4 border-b border-subtle">
    <span
      class="inline-block px-3 py-1 text-sm font-medium rounded-full border"
      :class="badge.class"
    >
      {{ badge.text }}
    </span>
    <!-- Only academic projects carry the educational context; the ongoing badge is self-explanatory. -->
    <p
      v-if="status === 'academic'"
      class="text-sm text-foreground-muted italic mt-2"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ status: string }>()

const { getStatusBadge, getStatusDescription } = useProjects()

const badge = computed(() => getStatusBadge(props.status))
const description = computed(() => getStatusDescription(props.status))
</script>
