<template>
  <ProjectDetail
    title="Spring Boot Messaging Application"
    status="academic"
    :tags="tags"
  >
    <ProjectSection title="About the Project">
      <ProjectProse>
        A group project where we built a web-based messaging platform using
        Java, Spring Boot and Thymeleaf. Users can create, edit and view
        messages, with authentication, authorisation and message translation
        built in; data lives in MySQL, and a separate branch reworks message
        updates with HTMX.
      </ProjectProse>
    </ProjectSection>

    <ProjectSection title="Key Features">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="Messaging">
          <ProjectList>
            <li>Create, edit and delete messages</li>
            <li>User authentication and authorisation</li>
            <li>Message translation support</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Rendering &amp; Data">
          <ProjectList>
            <li>Server-side rendering with Thymeleaf</li>
            <li>MySQL database for storage</li>
            <li>HTMX-powered updates on a separate branch</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection title="Architecture">
      <div class="grid md:grid-cols-3 gap-4">
        <ProjectInfoCard title="Backend" heading-size="base">
          <ProjectList size="sm">
            <li>Java with Spring Boot</li>
            <li>Spring Data for persistence</li>
            <li>Spring Security for access control</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="View Layer" heading-size="base">
          <ProjectList size="sm">
            <li>Thymeleaf server-side templates</li>
            <li>HTMX branch for partial updates</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Data" heading-size="base">
          <ProjectList size="sm">
            <li>MySQL database</li>
            <li>Validation through Spring Boot starters</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink
        href="https://github.com/Mattan41/springBootGroupProject"
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
  { label: 'Spring Boot', color: 'green' },
  { label: 'Thymeleaf', color: 'blue' },
  { label: 'MySQL', color: 'orange' },
  { label: 'HTMX', color: 'purple' }
]
</script>
