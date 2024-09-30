<script setup>
</script>

<template>
  <main class="flex flex-col items-center justify-center h-screen text-center">
    <div class="webapp-info">
      <h1 class="text-2xl mb-4">My Projects</h1>
      <ol class="list-decimal">
        <li class="text-sm italic mb-4">
          <a href="https://5eCombatEncounter.kruskopf.org" target="_blank" class="project-link text-blue-500 no-underline rounded border border-blue-500 hover:bg-blue-500 hover:text-white"> 5e Combat Encounter Builder</a>
          This application is a school project designed as an encounter builder for Dungeons & Dragons 5th Edition. It utilizes the <a href="https://open5e.com/api-docs" target="_blank" class="custom-link text-red-700 italic no-underline">Open5e API</a> to fetch monster data. The current functionality includes listing a handful of monsters and adding them to a combat list, and optionally create your own monster and add to combat. Combat list is stored in local storage. Future development plans include extending the functionality to allow searching and filtering monsters, as well as saving monsters to a favorites list.
        </li>
        <li class="text-sm italic mb-4">
          <a href="https://topflicks.kruskopf.org/" target="_blank" class="project-link text-blue-500 no-underline rounded border border-blue-500 hover:bg-blue-500 hover:text-white"> Top Flicks</a>
          Top Flicks is a school project web application built with HTML, CSS, and JavaScript for browsing and managing your favorite movies. Users can register, log in, search for movies, and add them to their favorites.
        </li>
      </ol>
    </div>
  </main>
</template>

<style scoped>

</style>