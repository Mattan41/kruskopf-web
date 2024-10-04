<script setup>
import {RouterLink, RouterView, useRoute} from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import {computed} from "vue";
import { ElButton } from 'element-plus'
const route = useRoute()

const msg = computed(() => {
  switch (route.path) {
    case '/about':
      return 'About Me'
    case '/projects':
      return 'My Projects'
    default:
      return 'Welcome!'
  }
})
</script>

<template>
  <header class="flex flex-col items-center max-h-screen lg:flex-row lg:items-center lg:justify-between lg:px-8">
    <div class="header-content text-base sm:text-lg lg:text-xl">
      <img alt="Mats logo" class="logo block mx-auto my-8 bg-white rounded-full w-12 sm:w-28 lg:w-24 lg:h-auto" src="@/assets/logo.svg" />
      <nav class="w-full text-center mt-8 text-sm sm:text-base lg:text-left lg:ml-[-1rem] lg:text-base lg:py-4 lg:mt-0 lg:w-auto flex flex-row">
        <RouterLink to="/" class="inline-block px-4 py-2 hover:border-blue-500">Home</RouterLink>
        <RouterLink to="/about" class="inline-block px-4 py-2 hover:border-blue-500">About me</RouterLink>
        <RouterLink to="/projects" class="inline-block px-4 py-2 hover:border-blue-500">Projects</RouterLink>
      </nav>
      <el-button type="primary">Hello Element Plus</el-button>
    </div>
    <div class="wrapper flex items-start flex-wrap mt-8 lg:mt-0">
      <HomePage :msg="msg" />
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
}
nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a:first-child {
  border-left: none;
}
</style>