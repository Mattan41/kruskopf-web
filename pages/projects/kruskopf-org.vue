<template>
  <ProjectDetail title="This Website" status="ongoing" :tags="tags">
    <ProjectSection title="About the Project">
      <ProjectProse>
        This site is my portfolio: a showcase for the projects I build and the
        stack I work in. It started life as a Vue + Vue Router single-page app
        and was later migrated to Nuxt for server-side rendering, better SEO and
        file-based routing — so this very page is part of the project it
        describes.
      </ProjectProse>
    </ProjectSection>

    <ProjectSection title="Key Features">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="Architecture">
          <ProjectList>
            <li>File-based routing through the pages directory</li>
            <li>Composables for typed, shared project data</li>
            <li>
              Reusable ProjectCard, ProjectStatus and ProjectBadge components
            </li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Presentation">
          <ProjectList>
            <li>Responsive layout for all screen sizes</li>
            <li>Tailwind CSS for rapid styling</li>
            <li>Dark mode support inherited from the base stylesheet</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection title="Architecture &amp; Structure">
      <div class="grid md:grid-cols-3 gap-4">
        <ProjectInfoCard title="Original Stack" heading-size="base">
          <ProjectList size="sm">
            <li>Vue with the Composition API</li>
            <li>Vue Router for manual routing</li>
            <li>Vite as build tool</li>
            <li>Project data in a JSON file</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Migration to Nuxt" heading-size="base">
          <ProjectList size="sm">
            <li>Vue Router replaced by file-based routing</li>
            <li>JSON data converted to typed composables</li>
            <li>Layouts and dedicated project pages added</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Current Structure" heading-size="base">
          <ProjectList size="sm">
            <li>pages/ for routes</li>
            <li>components/ for shared UI</li>
            <li>composables/ for shared logic and data</li>
            <li>assets/ for styles</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection>
      <ProjectCallout tone="neutral" title="Meta">
        This very page you're reading is part of the project it describes — a
        recursive portfolio that documents itself.
      </ProjectCallout>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink
        href="https://github.com/Mattan41/kruskopf-web"
        variant="secondary"
      >
        View on GitHub ↗
      </ProjectActionLink>
    </template>
  </ProjectDetail>
</template>

<script setup lang="ts">
import type { TagColor } from '~/composables/useProjects'

const tags: { label: string; color: TagColor }[] = [
  { label: 'Nuxt', color: 'green' },
  { label: 'Vue.js', color: 'green' },
  { label: 'Tailwind CSS', color: 'blue' },
  { label: 'TypeScript', color: 'blue' }
]
</script>
