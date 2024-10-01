<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from "@/components/HomePage.vue";
</script>

<template>
  <header class="flex flex-col items-center max-h-screen lg:flex-row lg:items-center lg:justify-between lg:px-8">
    <img alt="Mats logo" class="logo block mx-auto my-8 bg-white rounded-full lg:my-0 lg:mr-8" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper flex items-start flex-wrap mt-8 lg:mt-0">
      <HomePage msg="Welcome!" />

      <nav class="w-full text-center mt-8 text-sm lg:text-left lg:ml-[-1rem] lg:text-base lg:py-4 lg:mt-0 lg:w-auto">
        <RouterLink to="/" class="inline-block px-4 py-2 hover:border-blue-500">Home</RouterLink>
        <RouterLink to="/about" class="inline-block px-4 py-2 hover:border-blue-500">About me</RouterLink>
        <RouterLink to="/projects" class="inline-block px-4 py-2 hover:border-blue-500">Projects</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
  background-color: white;
  border-radius: 50%;
}
nav a {
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a:first-of-type {
    border: 0;
  }


  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
}
</style>
