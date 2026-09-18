<template>
  <ProjectDetail title="Pärlband" status="ongoing" :tags="tags">
    <ProjectSection title="About the Project">
      <ProjectProse>
        A serverless full-stack web application built for the band Pärlband to
        manage and stream music, lyrics, and sheet music. Instead of running a
        conventional container or Node.js server, the frontend is compiled into
        a static export hosted on Cloudflare Pages, while all dynamic
        operations—relational data persistence, REST APIs, and media
        streaming—run entirely on Cloudflare's edge infrastructure.
      </ProjectProse>
    </ProjectSection>

    <ProjectSection title="Key Features">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="Persistent Media Player">
          <ProjectList>
            <li>
              Single audio element surviving client-side route transitions
            </li>
            <li>
              Global state management (queue, playback, active track) via
              Zustand
            </li>
            <li>
              Play-count analytics with debounce rules (registers after 5s
              continuous playback)
            </li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Edge Admin &amp; Media Pipeline">
          <ProjectList>
            <li>
              Direct binary streaming to R2 object storage via Workers to avoid
              RAM buffering
            </li>
            <li>
              Automatic metadata synchronization linking R2 objects to SQL
              records
            </li>
            <li>
              Protected editor surface for songs, recordings, musicians, and
              credits
            </li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection title="Architecture &amp; Edge Infrastructure">
      <div class="grid md:grid-cols-3 gap-4">
        <ProjectInfoCard title="Frontend Client" heading-size="base">
          <ProjectList size="sm">
            <li>Next.js 16 App Router (static export)</li>
            <li>React &amp; TypeScript</li>
            <li>Tailwind CSS</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Edge Backend" heading-size="base">
          <ProjectList size="sm">
            <li>Cloudflare Pages Functions (REST API)</li>
            <li>Zero-latency cold starts with V8 isolates</li>
            <li>Stream-through payload handling</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="Storage &amp; Data" heading-size="base">
          <ProjectList size="sm">
            <li>D1: Relational SQLite with versioned SQL migrations</li>
            <li>R2: S3-compatible asset storage via custom CDN domain</li>
            <li>Automatic primary/fallback recording queries</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection>
      <ProjectCallout tone="info" title="Security &amp; Edge Auth">
        Administrative interfaces (<code>/admin</code>) and write endpoints
        (<code>/api/admin/*</code>) are secured at the edge using
        <strong>Cloudflare Zero Trust (Access)</strong>, enforcing identity
        verification prior to Worker invocation.
      </ProjectCallout>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink href="https://parlband.kruskopf.org" variant="primary">
        Live Website ↗
      </ProjectActionLink>
      <ProjectActionLink
        href="https://github.com/Mattan41/parlband"
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
  { label: 'Next.js 16', color: 'blue' },
  { label: 'TypeScript', color: 'blue' },
  { label: 'Tailwind CSS v4', color: 'green' },
  { label: 'Cloudflare D1 & R2', color: 'purple' },
  { label: 'Pages Functions', color: 'orange' },
  { label: 'Zustand', color: 'yellow' }
]
</script>
