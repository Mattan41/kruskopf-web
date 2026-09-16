<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32 min-h-[65vh] flex items-center"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <img
            alt="Mats Kruskopf"
            class="w-32 h-32 rounded-full mx-auto mb-6 border-4 shadow-lg bg-white border-gray-700 float-animation"
            src="/logo.svg"
          />
          <h1
            class="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          >
            About Me
          </h1>
          <p
            class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Backend Developer | Musician | Hobby Tinkerer
          </p>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          class="w-6 h-6 text-gray-400 dark:text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="prose prose-lg max-w-prose lg:max-w-none mx-auto text-gray-700 dark:text-gray-300"
        >
          <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Hello
          </h2>

          <p class="mb-6">
            I'm Mats Kruskopf. I came into software development after years as
            an audiologist, and I work as a backend developer now — but I end up
            building the whole stack on my own projects, mostly because I like
            following a feature from database to browser. When I'm not coding, I
            enjoy board gaming with friends and prepping upcoming D&D campaigns,
            and I write songs and perform with my group
            <a
              href="https://parlband.se"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >Pärlband</a
            >.
          </p>
        </div>

        <!-- Skills Grid -->
        <div class="mt-12 grid md:grid-cols-2 gap-8">
          <div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Frontend
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Vue.js & Nuxt</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ Responsive Design</li>
            </ul>
          </div>

          <div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Backend
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Java & Spring Boot</li>
              <li>✓ RESTful APIs & Microservices</li>
              <li>✓ MySQL & SQLite</li>
              <li>✓ OAuth2 Authentication</li>
            </ul>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              DevOps & Cloud
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Docker & Self-Hosting</li>
              <li>✓ Cloudflare Tunnels & Edge (R2/Pages)</li>
              <li>✓ Git & GitHub Actions CI/CD</li>
            </ul>
          </div>

          <div class="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Other
            </h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Agile Development</li>
              <li>✓ API Integration</li>
              <li>✓ Problem Solving</li>
            </ul>
          </div>
        </div>

        <!-- Connect / CTA -->
        <div
          class="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg"
        >
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Let's Connect
          </h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6">
            Explore my projects, source code, or career background.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <NuxtLink
              to="/projects"
              class="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View Projects
            </NuxtLink>
            <a
              href="https://github.com/Mattan41"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold"
            >
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/mats-kruskopf-eriksson-6b7857264"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#084e96] transition-colors font-semibold"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}
</style>
