
// composables/useProjects.ts
export const useProjects = () => {
    const projects = [
        {
            title: "Unseen Servant",
            slug: "unseen-servant",
            shortDescription: "Vue 3 + Spring Boot JPA project (private demo)",
            tags: ["Vue.js", "Spring Boot", "MySQL", "Docker"],
            repoLink: 'https://github.com/Mattan41/unseen-servant',
            link: 'https://unseenservant.se',
            category: "full-stack"
        },
        {
            slug: 'kruskopf-org',
            title: 'This Website',
            shortDescription: 'A modern  website built with Nuxt 3, showcasing my hobbies, projects and skills.',
            tags: ['Nuxt 3', 'Vue.js'],
            repoLink: 'https://github.com/Mattan41/kruskopf-web',
            link: 'https://kruskopf.org',
            status: 'ongoing',
            category: "frontend"
        },
        {
            slug: 'cinema-scala',
            title: 'Cinema Scala',
            shortDescription: 'A full-stack cinema booking system with Vue.js frontend and Spring Boot backend.',
            tags: ['Vue.js', 'Spring boot', 'API', 'Gaming'],
            repoLink: 'https://github.com/Mattan41/projekt-cinema-scala',
            link: null,
            status: 'academic',
            category: "full-stack"
        },
        {
            slug: '5e-encounter-builder',
            title: '5e Encounter Builder',
            shortDescription: 'A web application built with Vue.js. An encounter builder for RPG system 5E.',
            tags: ['Vue.js', 'API', 'Gaming'],
            repoLink: 'https://github.com/Mattan41/5eEncounterBuilder',
            link: 'https://5eCombatEncounter.kruskopf.org',
            status: 'ongoing',
            category: "frontend"
        },
        {
            slug: 'top-flicks',
            title: 'Top Flicks',
            shortDescription: 'A web application built with HTML, CSS, and JavaScript.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            repoLink: 'https://github.com/Mattan41/labb-html-css-javascript',
            link: 'https://topflicks.kruskopf.org/',
            status: 'academic',
            category: "frontend"
        },
        {
            slug: 'chatgut-search',
            title: 'Search Service for Chatgut',
            shortDescription: 'A microservice for searching message content using Elasticsearch.',
            tags: ['Java', 'Spring Boot', 'Elasticsearch', 'Kubernetes'],
            repoLink: 'https://github.com/chatgut/searchService3',
            link: null,
            status: 'completed-academic',
            category: "backend"
        },
        {
            slug: 'spring-messaging',
            title: 'Spring Boot Messaging Application',
            shortDescription: 'A web-based messaging platform built using Java, Spring Boot, and Thymeleaf.',
            tags: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'HTMX'],
            repoLink: 'https://github.com/Mattan41/springBootGroupProject',
            link: null,
            status: 'academic',
            category: "full-stack"
        },
        {
            slug: 'spi-unitconverter',
            title: 'SPI Unit Converter',
            shortDescription: 'A Java application for converting units using the Service Provider Interface (SPI) pattern.',
            tags: ['Java', 'SPI', 'Design Patterns'],
            repoLink: 'https://github.com/Mattan41/SPI-unitconverter',
            link: null,
            status: 'academic',
            category: "backend"
        },
        {
            slug: 'jakarta-wildfly',
            title: 'Jakarta Project with WildFly',
            shortDescription: 'RESTful Web Service Implementation with JAX-RS, Jakarta EE, and WildFly.',
            tags: ['Java', 'Jakarta EE', 'WildFly', 'Docker', 'REST API'],
            repoLink: 'https://github.com/Mattan41/projektJakarta',
            link: null,
            status: 'academic',
            category: "backend"
        }
    ]

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'academic':
                return {
                    text: 'Academic Project',
                    class: 'bg-blue-100 text-blue-700 border-blue-300'
                }
            case 'ongoing':
                return {
                    text: 'Ongoing Development',
                    class: 'bg-green-100 text-green-700 border-green-300'
                }
            case 'completed':
                return {
                    text: 'Completed',
                    class: 'bg-gray-100 text-gray-700 border-gray-300'
                }
            default:
                return {
                    text: 'Project',
                    class: 'bg-gray-100 text-gray-700 border-gray-300'
                }
        }
    }

    const getStatusDescription = (status: string) => {
        switch (status) {
            case 'academic':
                return 'Built as part of my studies in software development'
            case 'ongoing':
                return 'Originally built during my studies, now continuing as a hobby project'
            case 'completed':
                return 'Completed project'
            default:
                return ''
        }
    }

    return {
        projects,
        getProjectBySlug: (slug: string) => projects.find(p => p.slug === slug),
        getStatusBadge,
        getStatusDescription
    }
}