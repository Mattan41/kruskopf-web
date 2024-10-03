<template>
  <div class="projects p-4">
    <div v-for="project in projects" :key="project.id"
         class="project-card mb-6 p-4 border rounded hover:shadow-lg transition-shadow duration-300">
      <RouterLink :to="{ name: 'projectdetails', params: project }" class="text-blue-500 hover:underline">
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
      </RouterLink>
      <p class="text-gray-600">{{ project.shortDescription }}</p>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue';

const projects = ref([
  {
    id: 1,
    title: "5e Encounter Builder",
    link: "https://5eCombatEncounter.kruskopf.org",
    shortDescription: "A web application built with Vue.js An encounter builder for RPG system 5E.",
    description: "This application is a school project designed as an encounter builder for the RPG system 5e. " +
        "It is a web application built with Vue.js. that utilizes the Open5e API. " +
        "The current functionality includes listing a handful of monsters and adding them to a combat list, and optionally create your own monster and add to combat. " +
        "Combat list is stored in local storage. Future development plans include extending the functionality to allow searching and filtering monsters, " +
        "as well as saving monsters to a favorites list.",
    repoLink: "https://github.com/Mattan41/5eEncounterBuilder",
    repoName: "5eEncounterBuilder",
    otherLink: "https://open5e.com/api-docs"
  },
  {
    id: 2,
    title: "Top Flicks",
    link: "https://topflicks.kruskopf.org/",
    shortDescription: "A web application built with HTML, CSS, and JavaScript.",
    description: "Top Flicks is a school project web application built with HTML, CSS, and JavaScript for browsing and managing " +
        "your favorite movies. Users can register, log in, search for movies, and add them to their favorites.",
    repoLink: "https://github.com/Mattan41/labb-html-css-javascript",
    repoName: "labb-html-css-javascript"
  },
  {
    id: 3,
    title: "Search Service for Chatgut",
    link: "#",
    shortDescription: "A microservice for searching message content using Elasticsearch.",
    description: "A microservice I built as a school project in the chatgut organization, enables users to search message content " +
        "using Elasticsearch. The service is built with Java and Spring Boot. There is also a branch where deployment is done with" +
        " Kubernetes.",
    repoLink: "https://github.com/chatgut/searchService3",
    repoName: "searchService3"
  },
  {
    id: 4,
    title: "Spring boot application for messaging",
    link: "#",
    shortDescription: "A web-based messaging platform built using Java, Spring Boot, and Thymeleaf.",
    description: "A group project I participated in, where we built a web-based messaging platform built using Java, Spring Boot, and Thymeleaf. " +
        "It allows users to create, edit, and view messages. The application supports user authentication and authorization, message translation, " +
        "and provides a user-friendly interface for managing messages. It uses a MySQL database for data storage and integrates with various " +
        "Spring Boot starters for functionality such as data access, security, and validation. Additionally, there is a branch updates messages using HTMX.",
    repoLink: "https://github.com/Mattan41/springBootGroupProject",
    repoName: "springBootGroupProject"
  },
  {
    id: 5,
    title: "SPI-unitconverter",
    link: "#",
    shortDescription: "A Java application for converting units using the Service Provider Interface (SPI) pattern.",
    description: "This Java application is built with pattern Service Provider Interface (SPI). " +
        "The program allows users to select from various Converter implementations to perform conversions between different units. " +
        "The application includes a simple command-line interface for user input and output.",
    repoLink: "https://github.com/Mattan41/SPI-unitconverter",
    repoName: "SPI-unitconverter"
  },
  {
    id: 6,
    title: "Jakarta Project with WildFly",
    link: "#",
    shortDescription: "Restful Web Service Implementation with JAX-RS, Jakarta EE, and WildFly.",
    description: "This project is a Java-based application built with Jakarta EE and running on the WildFly application server. " +
        "The application includes comprehensive integration tests using Testcontainers and RestAssured to ensure robust and reliable functionality. " +
        "Docker and Docker Compose are used to containerize the application and manage multi-container setups.",
    repoLink: "https://github.com/Mattan41/projektJakarta",
    repoName: "JakartaProject"
  }
]);
</script>

<style>
@media (min-width: 1024px) {
  .projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>