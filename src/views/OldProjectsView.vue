<script setup>
</script>

<template>
  <main class="flex flex-col items-center justify-start h-screen text-center">
    <div class="webapp-info">
      <h1 class="text-2xl mb-4">My Projects</h1>
      <ol class="list-decimal list-inside space-y-4 text-left">
        <li class="text-sm italic mb-4">
          <a href="https://5eCombatEncounter.kruskopf.org" target="_blank"
             class="project-link text-blue-500 no-underline rounded border border-blue-500 hover:bg-blue-500 hover:text-white">
            5e Combat Encounter Builder</a>
          This application is a school project designed as an encounter builder for Dungeons & Dragons 5th Edition. It
          utilizes the <a href="https://open5e.com/api-docs" target="_blank"
                          class="custom-link text-red-700 italic no-underline">Open5e API</a> to fetch monster data. The
          current functionality includes listing a handful of monsters and adding them to a combat list, and optionally
          create your own monster and add to combat. Combat list is stored in local storage. Future development plans
          include extending the functionality to allow searching and filtering monsters, as well as saving monsters to a
          favorites list.
          <h4>Link to github repo: <a href="https://github.com/Mattan41/vue-labb2"
                                      target="_blank"
                                      class="custom-link text-red-700 italic no-underline">
            vue-labb2 </a></h4>

        </li>
        <li class="text-sm italic mb-4">
          <a href="https://topflicks.kruskopf.org/" target="_blank"
             class="project-link text-blue-500 no-underline rounded border border-blue-500 hover:bg-blue-500 hover:text-white">
            Top Flicks</a>
          Top Flicks is a school project web application built with HTML, CSS, and JavaScript for browsing and managing
          your favorite movies. Users can register, log in, search for movies, and add them to their favorites.
          <h4>
            Link to
            github repo: <a href="https://github.com/Mattan41/labb-html-css-javascript" target="_blank"
                            class="custom-link text-red-700 italic no-underline"> labb-html-css-javascript </a>
          </h4>
        </li>
        <li class="text-sm italic mb-4">
          <h3> Search Service for Chatgut</h3>
          A microservice I built as a school project in the chatgut organization, enables users to search message
          content using Elasticsearch. The service is built with Java and Spring Boot. There is also a branch where
          deployment is done with Kubernetes.
          <h4>
            Link to github repo: <a href="https://github.com/chatgut/searchService3" target="_blank"
                                    class="custom-link text-red-700 italic no-underline"> searchService3 </a>
          </h4>
        </li>
        <li class="text-sm italic mb-4">
          <h3>Spring boot application</h3>
          A group project I participated in, where we built a web-based messaging platform built using Java, Spring
          Boot, and Thymeleaf. It
          allows users to create, edit, and view messages. The application supports user authentication and
          authorization, message translation, and provides a user-friendly interface for managing messages. It uses a
          MySQL database for data storage and integrates with various Spring Boot starters for functionality such as
          data access, security, and validation. The project is managed using Maven and includes dependencies for
          testing, web development, and API documentation. Additionally, there is a branch named
          mats-update-messages-with-htmx that updates messages using HTMX.
          <h4>
            Link to github repo: <a href="https://github.com/Mattan41/springBootGroupProject" target="_blank"
                                    class="custom-link text-red-700 italic no-underline"> springBootGroupProject </a>
          </h4>
        </li>
        <li class="text-sm italic mb-4">
          <h3>SPI-unitconverter</h3>
          This Java application demonstrates a modular and extensible approach to unit conversion using the Service
          Provider Interface (SPI). The program allows users to select from various Converter implementations to perform
          conversions between different units. The application includes a simple command-line interface for user input and output.

          <h4>
            Link to github repo: <a href="https://github.com/Mattan41/SPI-unitconverter" target="_blank"
                                    class="custom-link text-red-700 italic no-underline"> SPI-unitconverter </a>
          </h4>
        </li>
      </ol>
    </div>
  </main>
</template>

<style scoped>

</style>