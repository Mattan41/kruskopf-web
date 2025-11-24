<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <img
                alt="Mats logo"
                class="w-12 h-12 rounded-full bg-white border-2 border-blue-500"
                src="assets/logo.svg"
            />
            <span class="text-xl font-bold text-gray-900 dark:text-gray-100 hidden sm:block">Mats Kruskopf</span>
          </NuxtLink>

          <nav class="flex space-x-1">
            <NuxtLink
                to="/"
                class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300
                 hover:bg-blue-50 dark:hover:bg-gray-700
                 hover:text-blue-600 transition-colors"
            >
              Home
            </NuxtLink>
            <NuxtLink
                to="/about"
                class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300
                 hover:bg-blue-50 dark:hover:bg-gray-700
                 hover:text-blue-600 transition-colors"
            >
              About
            </NuxtLink>
            <NuxtLink
                to="/projects"
                class="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300
                hover:bg-blue-50 dark:hover:bg-gray-700
                hover:text-blue-600 transition-colors"
            >
              Projects
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <slot/>
    </main>

    <footer class="bg-gray-50 dark:bg-gray-900 border-t mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="text-center text-gray-600 dark:text-gray-300">
          <p>&copy; {{ new Date().getFullYear() }} Mats Kruskopf. Built with Nuxt 3.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  background-color: #eff6ff;
  color: #2563eb;
  font-weight: 500;
}
</style>