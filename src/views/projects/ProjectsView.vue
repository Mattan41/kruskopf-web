<template>
  <div class="projects">
    <h1>This is my projects</h1>
    <div v-for="project in projects" :key="project.id">
      <RouterLink :to="{ name: 'projectdetails', params: project }">
        <h2>{{ project.title }}</h2>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: "5e Combat Encounter Builder",
    link: "https://5eCombatEncounter.kruskopf.org",
    description: "This application is a school project designed as an encounter builder for Dungeons & Dragons 5th Edition. " +
        "It utilizes the Open5e API " +
        "The current functionality includes listing a handful of monsters and adding them to a combat list, and optionally create your own monster and add to combat. " +
        "Combat list is stored in local storage. Future development plans include extending the functionality to allow searching and filtering monsters, " +
        "as well as saving monsters to a favorites list.",
    repoLink: "https://github.com/Mattan41/vue-labb2",
    repoName: "5eEncounterBuilder",
    otherLink: "https://open5e.com/api-docs"
  },
  {
    id: 2,
    title: "Top Flicks",
    link: "https://topflicks.kruskopf.org/",
    description: "Top Flicks is a school project web application built with HTML, CSS, and JavaScript for browsing and managing " +
        "your favorite movies. Users can register, log in, search for movies, and add them to their favorites.",
    repoLink: "https://github.com/Mattan41/labb-html-css-javascript",
    repoName: "labb-html-css-javascript"
  },
  {
    id: 3,
    title: "Search Service for Chatgut",
    link: "#",
    description: "A microservice I built as a school project in the chatgut organization, enables users to search message content " +
        "using Elasticsearch. The service is built with Java and Spring Boot. There is also a branch where deployment is done with" +
        " Kubernetes.",
    repoLink: "https://github.com/chatgut/searchService3",
    repoName: "searchService3"
  },
  {
    id: 4,
    title: "Spring boot application",
    link: "#",
    description: "A group project I participated in, where we built a web-based messaging platform built using Java, Spring Boot, and Thymeleaf. It allows users to create, edit, and view messages. The application supports user authentication and authorization, message translation, and provides a user-friendly interface for managing messages. It uses a MySQL database for data storage and integrates with various Spring Boot starters for functionality such as data access, security, and validation. The project is managed using Maven and includes dependencies for testing, web development, and API documentation. Additionally, there is a branch named mats-update-messages-with-htmx that updates messages using HTMX.",
    repoLink: "https://github.com/Mattan41/springBootGroupProject",
    repoName: "springBootGroupProject"
  },
  {
    id: 5,
    title: "SPI-unitconverter",
    link: "#",
    description: "This Java application is built with pattern Service Provider Interface (SPI). " +
        "The program allows users to select from various Converter implementations to perform conversions between different units. " +
        "The application includes a simple command-line interface for user input and output.",
    repoLink: "https://github.com/Mattan41/SPI-unitconverter",
    repoName: "SPI-unitconverter"
  }
]);
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>