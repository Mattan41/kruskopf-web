<template>
  <ProjectDetail title="Cinema Scala" status="academic" :tags="tags">
    <ProjectSection title="About the Project">
      <ProjectProse>
        Cinema Scala is a full-stack cinema booking system built to demonstrate
        a modern web application split into separate frontend and backend
        services. Vue.js drives the booking interface, Spring Boot handles
        business logic and authentication, and the movie catalogue comes from
        the TMDB API with Google OAuth2 for sign-in.
      </ProjectProse>
    </ProjectSection>

    <ProjectSection title="Key Features">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="User Features">
          <ProjectList>
            <li>Create an account and sign in with Google OAuth2</li>
            <li>Browse movies and showtimes from TMDB</li>
            <li>Book cinema tickets and manage personal bookings</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Admin Features">
          <ProjectList>
            <li>Dedicated admin panel</li>
            <li>Schedule movie viewings</li>
            <li>Configure screening times and theaters</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection title="Technical Architecture">
      <div class="grid md:grid-cols-3 gap-4">
        <ProjectInfoCard title="Frontend" heading-size="base">
          <ProjectList size="sm">
            <li>Vue.js with the Composition API</li>
            <li>Vue Router for navigation</li>
            <li>RESTful API integration</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Backend" heading-size="base">
          <ProjectList size="sm">
            <li>Spring Boot REST endpoints</li>
            <li>Spring Security with OAuth2</li>
            <li>JPA/Hibernate on MySQL</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Authentication &amp; APIs" heading-size="base">
          <ProjectList size="sm">
            <li>Google OAuth2 identity</li>
            <li>TMDB movie metadata</li>
            <li>Secure session management</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection>
      <ProjectCallout tone="warning" title="Configuration">
        Running the application locally requires Google OAuth2 client
        credentials, a TMDB access token and a MySQL connection.
      </ProjectCallout>
    </ProjectSection>

    <ProjectSection title="What I Learned">
      <ProjectList>
        <li>Implementing the OAuth2 authorisation flow</li>
        <li>
          Splitting a full-stack app into separate frontend and backend services
        </li>
        <li>Integrating a third-party API (TMDB)</li>
        <li>Role-based access control for user versus admin</li>
        <li>Designing a database schema for a booking system</li>
      </ProjectList>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink
        href="https://github.com/Mattan41/cinema-scala"
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
  { label: 'Vue.js', color: 'green' },
  { label: 'Spring Boot', color: 'green' },
  { label: 'OAuth2', color: 'blue' },
  { label: 'MySQL', color: 'orange' },
  { label: 'TMDB API', color: 'red' }
]
</script>
