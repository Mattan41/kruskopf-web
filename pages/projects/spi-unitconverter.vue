<template>
  <ProjectDetail title="SPI Unit Converter" status="academic" :tags="tags">
    <ProjectSection title="About the Project">
      <ProjectProse>
        A Java application built around the Service Provider Interface (SPI)
        pattern to demonstrate modular architecture and extensible design. Users
        select from several Converter implementations through a small
        command-line interface, and the ServiceLoader API keeps the design open
        for new converters.
      </ProjectProse>
    </ProjectSection>

    <ProjectSection title="Key Features">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="SPI Architecture">
          <ProjectList>
            <li>Service Provider Interface design</li>
            <li>Pluggable converter modules</li>
            <li>Extensible for new converters</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Interface">
          <ProjectList>
            <li>Multiple converter implementations</li>
            <li>Command-line input and output</li>
            <li>ServiceLoader-based discovery</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection title="Design Patterns">
      <ProjectList>
        <li>Service Provider Interface (SPI)</li>
        <li>Strategy Pattern</li>
        <li>Factory Pattern</li>
      </ProjectList>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink
        href="https://github.com/Mattan41/SPI-unitconverter"
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
  { label: 'Java', color: 'red' },
  { label: 'SPI', color: 'blue' },
  { label: 'Design Patterns', color: 'purple' }
]
</script>
