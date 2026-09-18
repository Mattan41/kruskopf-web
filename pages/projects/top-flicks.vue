<template>
  <ProjectDetail title="Top Flicks" status="academic" :tags="tags">
    <ProjectSection title="About the Project">
      <ProjectProse>
        Top Flicks is a school project web application built with HTML, CSS and
        JavaScript for browsing and managing favourite movies. Users can
        register, log in, search for movies and add them to a favourites list.
      </ProjectProse>
    </ProjectSection>

    <ProjectSection title="Key Features">
      <div class="grid md:grid-cols-2 gap-4">
        <ProjectInfoCard title="Movie Browsing">
          <ProjectList>
            <li>Search for movies by title</li>
            <li>Add and remove favourites</li>
          </ProjectList>
        </ProjectInfoCard>

        <ProjectInfoCard title="User Account">
          <ProjectList>
            <li>Registration and login</li>
            <li>Responsive layout for all screen sizes</li>
          </ProjectList>
        </ProjectInfoCard>
      </div>
    </ProjectSection>

    <ProjectSection title="Architecture">
      <ProjectInfoCard title="Frontend">
        <ProjectList>
          <li>HTML5 structure and semantic markup</li>
          <li>CSS3 for layout and styling</li>
          <li>JavaScript for interactivity</li>
        </ProjectList>
      </ProjectInfoCard>
    </ProjectSection>

    <template #actions>
      <ProjectActionLink
        href="https://topflicks.kruskopf.org/"
        variant="primary"
      >
        Try it Live ↗
      </ProjectActionLink>
      <ProjectActionLink
        href="https://github.com/Mattan41/labb-html-css-javascript"
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
  { label: 'HTML', color: 'orange' },
  { label: 'CSS', color: 'blue' },
  { label: 'JavaScript', color: 'yellow' }
]
</script>
