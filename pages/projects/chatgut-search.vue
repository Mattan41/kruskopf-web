<template>
  <ProjectDetail
    title="Search Service for Chatgut"
    status="academic"
    :tags="tags"
  >
    <ProjectSection title="About the Project">
      <ProjectProse>
        A search microservice I built in the chatgut organisation, letting users
        search message content with Elasticsearch. The service is written in
        Java with Spring Boot and exposes fast full-text search for the
        messaging platform, with a separate branch demonstrating Kubernetes
        deployment.
      </ProjectProse>
    </ProjectSection>

    <ProjectSection title="Key Features">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="Search">
          <ProjectList>
            <li>Full-text search over message content</li>
            <li>RESTful API design</li>
            <li>Integration with the messaging platform</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Deployment">
          <ProjectList>
            <li>Independent microservice</li>
            <li>Docker containerisation</li>
            <li>Kubernetes manifests on a separate branch</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection title="Architecture">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="Service" heading-size="base">
          <ProjectList size="sm">
            <li>Java with Spring Boot</li>
            <li>Elasticsearch for indexed search</li>
            <li>RESTful API endpoints</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Operations" heading-size="base">
          <ProjectList size="sm">
            <li>Docker image for the service</li>
            <li>Kubernetes deployment on a dedicated branch</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink
        href="https://github.com/chatgut/searchService3"
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
  { label: 'Elasticsearch', color: 'yellow' },
  { label: 'Kubernetes', color: 'blue' }
]
</script>
