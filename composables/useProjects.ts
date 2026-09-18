// composables/useProjects.ts
import { computed } from 'vue'

export const useProjects = () => {
  const projects = [
    {
      title: 'Unseen Servant',
      slug: 'unseen-servant',
      shortDescription: 'Vue 3 + Spring Boot JPA project',
      tags: ['Vue.js', 'Spring Boot', 'MySQL', 'Docker'],
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
        'Serverless',
        'Cloudflare Pages',
        'Cloudflare D1',
        'Cloudflare R2',
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
        'A modern website built with Nuxt 3, showcasing my hobbies, projects and skills.',
      tags: ['Nuxt 3', 'Vue.js'],
      repoLink: 'https://github.com/Mattan41/kruskopf-web',
      link: 'https://kruskopf.org',
      status: 'ongoing',
      featured: true,
      category: 'frontend'
    },
    {
      slug: 'cinema-scala',
      title: 'Cinema Scala',
      shortDescription:
        'A full-stack cinema booking system with Vue.js frontend and Spring Boot backend.',
      tags: ['Vue.js', 'Spring boot', 'API', 'Gaming'],
      repoLink: 'https://github.com/Mattan41/projekt-cinema-scala',
      link: null,
      status: 'academic',
      featured: false,
      category: 'full-stack'
    },
    {
      slug: '5e-encounter-builder',
      title: '5e Encounter Builder',
      shortDescription:
        'A web application built with Vue.js. An encounter builder for RPG system 5E.',
      tags: ['Vue.js', 'API', 'Gaming'],
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
        'A web application built with HTML, CSS, and JavaScript.',
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
        'A microservice for searching message content using Elasticsearch.',
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
        'A web-based messaging platform built using Java, Spring Boot, and Thymeleaf.',
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
        'A Java application for converting units using the Service Provider Interface (SPI) pattern.',
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
        'RESTful Web Service Implementation with JAX-RS, Jakarta EE, and WildFly.',
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
