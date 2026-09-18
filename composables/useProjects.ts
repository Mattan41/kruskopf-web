// composables/useProjects.ts
import { computed } from 'vue'

/**
 * Colour variants offered by the project tag pills (components/ProjectTag.vue).
 * Kept here so project pages have a single, typed source of truth for the
 * palette instead of hand-writing Tailwind colour classes.
 */
export type TagColor =
  'blue' | 'green' | 'purple' | 'orange' | 'yellow' | 'red' | 'slate'

export const useProjects = () => {
  const projects = [
    {
      title: 'Unseen Servant',
      slug: 'unseen-servant',
      shortDescription:
        'A D&D 5e campaign tracker and character manager: Vue front end on a Spring Boot REST API with MySQL, dual OAuth2 login and Docker deployment. My graduation thesis, still actively developed.',
      tags: [
        'Vue.js',
        'Spring Boot',
        'MySQL',
        'OAuth2 & JWT',
        'Docker',
        'TTRPG / 5e'
      ],
      repoLink: 'https://github.com/Mattan41/unseenservant-backend',
      link: 'https://unseenservant.se',
      status: 'ongoing',
      featured: true,
      category: 'full-stack'
    },
    {
      slug: 'parlband',
      title: 'Pärlband',
      shortDescription:
        "A serverless full-stack band website — a Next.js static export with its API, database and media storage running on Cloudflare's edge.",
      tags: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Cloudflare D1 & R2',
        'Pages Functions',
        'Zustand'
      ],
      repoLink: 'https://github.com/Mattan41/parlband',
      link: 'https://parlband.kruskopf.org',
      status: 'ongoing',
      featured: true,
      category: 'full-stack'
    },
    {
      slug: 'kruskopf-org',
      title: 'This Website',
      shortDescription:
        'My portfolio, built with Nuxt — file-based routing, typed composables and reusable components, migrated from a Vue SPA.',
      tags: ['Nuxt', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
      repoLink: 'https://github.com/Mattan41/kruskopf-web',
      link: 'https://developer.kruskopf.org',
      status: 'ongoing',
      featured: true,
      category: 'frontend'
    },
    {
      slug: 'cinema-scala',
      title: 'Cinema Scala',
      shortDescription:
        'A full-stack cinema booking system: Vue.js front end on a Spring Boot API with Google OAuth2 sign-in and movie data from TMDB.',
      tags: ['Vue.js', 'Spring Boot', 'OAuth2', 'MySQL', 'TMDB API'],
      repoLink: 'https://github.com/Mattan41/cinema-scala',
      link: null,
      status: 'academic',
      featured: false,
      category: 'full-stack'
    },
    {
      slug: '5e-encounter-builder',
      title: '5e Encounter Builder',
      shortDescription:
        'A Vue encounter builder for D&D 5e that pulls monsters from the Open5e API and keeps the combat list in local storage.',
      tags: ['Vue.js', 'Open5e API', 'Local Storage'],
      repoLink: 'https://github.com/Mattan41/5eEncounterBuilder',
      link: 'https://5eCombatEncounter.kruskopf.org',
      status: 'ongoing',
      featured: true,
      category: 'frontend'
    },
    {
      slug: 'top-flicks',
      title: 'Top Flicks',
      shortDescription:
        'A browser-based movie app built with HTML, CSS and JavaScript — user accounts, movie search and a favourites list.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      repoLink: 'https://github.com/Mattan41/labb-html-css-javascript',
      link: 'https://topflicks.kruskopf.org/',
      status: 'academic',
      featured: false,
      category: 'frontend'
    },
    {
      slug: 'chatgut-search',
      title: 'Search Service for Chatgut',
      shortDescription:
        'An Elasticsearch-backed search microservice for the Chatgut messaging platform, written in Java with Spring Boot and deployable to Kubernetes.',
      tags: ['Java', 'Spring Boot', 'Elasticsearch', 'Kubernetes'],
      repoLink: 'https://github.com/chatgut/searchService3',
      link: null,
      status: 'academic',
      featured: false,
      category: 'backend'
    },
    {
      slug: 'spring-messaging',
      title: 'Spring Boot Messaging Application',
      shortDescription:
        'A server-rendered messaging platform built with Spring Boot and Thymeleaf — accounts, message editing, translation and MySQL storage.',
      tags: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'HTMX'],
      repoLink: 'https://github.com/Mattan41/springBootGroupProject',
      link: null,
      status: 'academic',
      featured: false,
      category: 'full-stack'
    },
    {
      slug: 'spi-unitconverter',
      title: 'SPI Unit Converter',
      shortDescription:
        'A Java unit converter built on the Service Provider Interface pattern, with pluggable converter modules discovered via ServiceLoader.',
      tags: ['Java', 'SPI', 'Design Patterns'],
      repoLink: 'https://github.com/Mattan41/SPI-unitconverter',
      link: null,
      status: 'academic',
      featured: false,
      category: 'backend'
    },
    {
      slug: 'jakarta-wildfly',
      title: 'Jakarta Project with WildFly',
      shortDescription:
        'A Jakarta EE REST service on WildFly exposing CRUD over a movie database with JAX-RS, tested with Testcontainers and RestAssured.',
      tags: ['Java', 'Jakarta EE', 'WildFly', 'Docker', 'REST API'],
      repoLink: 'https://github.com/Mattan41/projektJakarta',
      link: null,
      status: 'academic',
      featured: false,
      category: 'backend'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'academic':
        return {
          text: 'Academic Project',
          class:
            'bg-slate-100 text-slate-600 border-slate-300 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
        }
      case 'ongoing':
        return {
          text: 'Ongoing Development',
          class:
            'bg-emerald-100 text-emerald-700 border-emerald-300 dark:bg-emerald-900 dark:text-emerald-200 dark:border-emerald-700'
        }
      case 'completed':
        return {
          text: 'Completed',
          class:
            'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
        }
      default:
        return {
          text: 'Project',
          class:
            'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
        }
    }
  }

  const getStatusDescription = (status: string) => {
    switch (status) {
      case 'academic':
        return 'Built as part of my studies in software development'
      case 'ongoing':
        return 'Actively maintained personal project'
      case 'completed':
        return 'Completed project'
      default:
        return ''
    }
  }

  const featuredProjects = computed(() =>
    projects.filter((p) => p.featured === true)
  )
  const academicProjects = computed(() =>
    projects.filter((p) => p.featured === false && p.status === 'academic')
  )

  return {
    projects,
    featuredProjects,
    academicProjects,
    getProjectBySlug: (slug: string) => projects.find((p) => p.slug === slug),
    getStatusBadge,
    getStatusDescription
  }
}
