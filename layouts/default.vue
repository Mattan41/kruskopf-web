<template>
  <div class="min-h-screen flex flex-col bg-surface">
    <header class="bg-surface shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <NuxtLink to="/" class="flex items-center space-x-3">
            <img
              alt="Mats logo"
              class="w-12 h-12 rounded-full bg-white border-2 border-accent"
              src="/logo.svg"
            />
            <span class="text-xl font-bold text-foreground hidden sm:block"
              >Mats Kruskopf</span
            >
          </NuxtLink>

          <nav class="flex space-x-1">
            <NuxtLink
              to="/"
              class="px-4 py-2 rounded-lg text-foreground-muted hover:bg-accent-soft hover:text-accent transition-colors"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/about"
              class="px-4 py-2 rounded-lg text-foreground-muted hover:bg-accent-soft hover:text-accent transition-colors"
            >
              About
            </NuxtLink>
            <NuxtLink
              to="/projects"
              class="px-4 py-2 rounded-lg text-foreground-muted hover:bg-accent-soft hover:text-accent transition-colors"
            >
              Projects
            </NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-surface-muted border-t border-subtle mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="text-center text-foreground-muted">
          <p>
            &copy; {{ new Date().getFullYear() }} Mats Kruskopf. Built with Nuxt
            3.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  background-color: rgb(var(--accent-soft));
  color: rgb(var(--accent));
  font-weight: 500;
}
</style>
