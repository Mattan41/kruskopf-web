<script setup>
</script>

<template>
  <main>
    <div class="webapp-info">
      <h1>My Projects</h1>
      <ol>
        <li>
          <a href="https://5eCombatEncounter.kruskopf.org" target="_blank" class="project-link"> 5e Combat Encounter Builder</a>
          This application is a school project designed as an encounter builder for Dungeons & Dragons 5th Edition. It utilizes the <a href="https://open5e.com/api-docs" target="_blank" class="custom-link">Open5e API</a> to fetch monster data. The current functionality includes listing a handful of monsters and adding them to a combat list, and optionally create your own monster and add to combat. Combat list is stored in local storage. Future development plans include extending the functionality to allow searching and filtering monsters, as well as saving monsters to a favorites list.
        </li>
      </ol>

    </div>
  </main>
</template>

<style scoped>
.webapp-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

li {
  font-size: 0.8rem;
  font-style: italic;
  margin-bottom: 1rem;
}

.webapp-info h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.webapp-info p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.webapp-info a {
  font-size: 1rem;
}

.project-link {
  color: rgb(52, 152, 219);
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid rgb(52, 152, 219);

}

.webapp-info a:hover {
  background-color: rgb(52, 152, 219);
  color: var(--color-background);
}

.custom-link {
  color: darkred;
  text-decoration: none;
  font-style: italic;
  border: unset;
}
</style>