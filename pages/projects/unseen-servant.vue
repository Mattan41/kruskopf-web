<template>
  <ProjectDetail title="Unseen Servant" status="ongoing" :tags="tags">
    <ProjectSection title="About the Project">
      <ProjectProse>
        Unseen Servant is a full-stack campaign tracking and character
        management application for tabletop RPG groups playing Dungeons &
        Dragons 5e. Originally built as my graduation thesis project at
        IT-Högskolan, it is still actively maintained as a hobby project — a Vue
        frontend on a modular Spring Boot REST API backed by MySQL, self-hosted
        on a local mini-PC and exposed through a Cloudflare Tunnel.
      </ProjectProse>
    </ProjectSection>

    <ProjectSection title="Key Features">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="Campaign Management">
          <ProjectList>
            <li>Role-based controls for gamemaster and player</li>
            <li>Campaign roster and status tracking</li>
            <li>Import characters into an active campaign</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Character Builder &amp; Tracking">
          <ProjectList>
            <li>D&amp;D 5e character creation and live sheet updates</li>
            <li>Portrait uploads for custom characters</li>
            <li>Offline guest mode backed by LocalStorage</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection title="Architecture &amp; Hosting">
      <div class="grid md:grid-cols-3 gap-4">
        <ProjectInfoCard title="Frontend" heading-size="base">
          <ProjectList size="sm">
            <li>Vue with the Composition API</li>
            <li>Pinia for centralised client state</li>
            <li>Tailwind CSS and Vite</li>
            <li>Axios interceptors for JWT handling</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Backend" heading-size="base">
          <ProjectList size="sm">
            <li>Spring Boot REST controllers</li>
            <li>Spring Data JPA on MySQL</li>
            <li>Spring Security with OAuth2 and JWT</li>
            <li>Multipart file service for portraits</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Deployment" heading-size="base">
          <ProjectList size="sm">
            <li>Docker Compose on a home Ubuntu mini-PC</li>
            <li>Ingress through a Cloudflare Tunnel</li>
            <li>GitHub release → Actions → Docker Hub</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection>
      <ProjectCallout tone="warning" title="Live Access" size="base">
        Production access at unseenservant.se is restricted by an OAuth2
        whitelist. For local evaluation without OAuth2 credentials there are two
        demo paths:
        <ProjectList size="sm">
          <li>
            <strong>Guest demo (frontend only):</strong> runs entirely in the
            browser on LocalStorage with seeded mock data.
          </li>
          <li>
            <strong>Full-stack demo:</strong> start the backend with
            <code>--spring.profiles.active=demo</code> (in-memory H2 with test
            accounts) and the frontend with <code>npm run demo</code>.
          </li>
        </ProjectList>
      </ProjectCallout>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink href="https://unseenservant.se" variant="primary">
        Try it Live ↗
      </ProjectActionLink>
      <ProjectActionLink href="https://dev.unseenservant.se" variant="ghost">
        Dev Build ↗
      </ProjectActionLink>
      <ProjectActionLink
        href="https://github.com/Mattan41/unseenservant-backend"
        variant="secondary"
      >
        Backend on GitHub ↗
      </ProjectActionLink>
      <ProjectActionLink
        href="https://github.com/Mattan41/unseenservant-frontend"
        variant="secondary"
      >
        Frontend on GitHub ↗
      </ProjectActionLink>
    </template>
  </ProjectDetail>
</template>

<script setup lang="ts">
import type { TagColor } from '~/composables/useProjects'

const tags: { label: string; color: TagColor }[] = [
  { label: 'Vue.js', color: 'blue' },
  { label: 'Spring Boot', color: 'green' },
  { label: 'MySQL', color: 'purple' },
  { label: 'OAuth2 & JWT', color: 'red' },
  { label: 'Docker', color: 'orange' },
  { label: 'TTRPG / 5e', color: 'slate' }
]
</script>
