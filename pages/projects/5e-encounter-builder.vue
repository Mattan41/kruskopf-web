<template>
  <ProjectDetail title="5e Encounter Builder" status="ongoing" :tags="tags">
    <ProjectSection title="About the Project">
      <ProjectProse>
        A web application for building combat encounters in the RPG system 5e,
        built with Vue.js and the Open5e API. Monsters can be browsed from the
        API, added to a combat list or created from scratch, and the encounter
        is persisted in local storage. Search, filtering and a favourites list
        are planned next.
      </ProjectProse>
    </ProjectSection>

    <ProjectSection title="Key Features">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="Encounter Building">
          <ProjectList>
            <li>Browse monsters from the Open5e API</li>
            <li>Create custom monsters</li>
            <li>Add monsters to a combat list</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Persistence &amp; Plans">
          <ProjectList>
            <li>Combat list saved in local storage</li>
            <li>Search and filtering planned next</li>
            <li>Favourites list planned next</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection title="Architecture">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="Frontend" heading-size="base">
          <ProjectList size="sm">
            <li>Vue.js</li>
            <li>Vite dev and build tooling</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Data" heading-size="base">
          <ProjectList size="sm">
            <li>Open5e API for monster data</li>
            <li>Local Storage API for persistence</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink
        href="https://5eCombatEncounter.kruskopf.org"
        variant="primary"
      >
        Try it Live ↗
      </ProjectActionLink>
      <ProjectActionLink
        href="https://github.com/Mattan41/5eEncounterBuilder"
        variant="secondary"
      >
        View on GitHub ↗
      </ProjectActionLink>
      <ProjectActionLink href="https://open5e.com/api-docs" variant="outline">
        Open5e API Docs ↗
      </ProjectActionLink>
    </template>
  </ProjectDetail>
</template>

<script setup lang="ts">
import type { TagColor } from '~/composables/useProjects'

const tags: { label: string; color: TagColor }[] = [
  { label: 'Vue.js', color: 'blue' },
  { label: 'Open5e API', color: 'green' },
  { label: 'Local Storage', color: 'purple' }
]
</script>
