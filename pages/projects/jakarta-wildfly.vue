<template>
  <ProjectDetail
    title="Jakarta Project with WildFly"
    status="academic"
    :tags="tags"
  >
    <ProjectSection title="About the Project">
      <ProjectProse>
        A Java application built with Jakarta EE and running on the WildFly
        application server. It exposes CRUD operations over a collection of
        movies stored in MySQL, backed by integration tests using Testcontainers
        and RestAssured and a Docker Compose setup for the multi-container
        environment.
      </ProjectProse>
    </ProjectSection>

    <ProjectSection title="Key Features">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="REST API">
          <ProjectList>
            <li>RESTful endpoints with JAX-RS</li>
            <li>Full CRUD on the movie database</li>
            <li>UUID-based entity identifiers</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Quality">
          <ProjectList>
            <li>DTOs and JSON data exchange</li>
            <li>Validation with structured error handling</li>
            <li>Integration tests with Testcontainers and RestAssured</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection title="Architecture">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="Runtime" heading-size="base">
          <ProjectList size="sm">
            <li>Jakarta EE on WildFly</li>
            <li>JAX-RS REST layer</li>
            <li>MySQL database</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Containerisation" heading-size="base">
          <ProjectList size="sm">
            <li>Docker for the application container</li>
            <li>Docker Compose for multi-container setups</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink
        href="https://github.com/Mattan41/projektJakarta"
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
  { label: 'Jakarta EE', color: 'orange' },
  { label: 'WildFly', color: 'purple' },
  { label: 'Docker', color: 'blue' },
  { label: 'REST API', color: 'green' }
]
</script>
