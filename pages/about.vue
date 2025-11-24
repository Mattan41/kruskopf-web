<template>
  <div>
    <!-- Hero Section -->
    <section
        class="bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32 min-h-screen flex items-center"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <img
              alt="Mats Kruskopf"
              class="w-32 h-32 rounded-full mx-auto mb-6 border-4 shadow-lg bg-white border-gray-700  float-animation"
              src="/assets/logo.svg"
          />
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h1>
          <p class="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Full-Stack Developer | Musician
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-prose lg:max-w-none mx-auto text-gray-700 dark:text-gray-300">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Hello</h2>
          <p class="mb-6">
            I'm Mats Kruskopf, a passionate full-stack developer with a strong foundation
            in both frontend and backend technologies.
          </p>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-12">What I Do</h3>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-12">Musician</h3>
          <p class="mb-6">
            When I'm not coding, I find myself singing with a guitar in hand.
          </p>

          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 mt-12">Gamer</h3>
          <p class="mb-6">
            When I'm not coding, I find myself board gaming with friends, or preparing next Dungeons & Dragons session.
          </p>

        </div>

        <!-- Skills Grid -->
        <div class="mt-12 grid md:grid-cols-2 gap-8">
          <div class="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Frontend</h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Vue.js</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ Responsive Design</li>
            </ul>
          </div>

          <div class="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Backend</h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Java & Spring Boot</li>
              <li>✓ RESTful APIs</li>
              <li>✓ MySQL</li>
              <li>✓ OAuth2 Authentication</li>
            </ul>
          </div>

          <div class="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">DevOps</h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Docker</li>
              <li>✓ Git & GitHub</li>
              <li>✓ CI/CD Basics</li>
            </ul>
          </div>

          <div class="bg-orange-50 dark:bg-orange-900 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Other</h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Agile Development</li>
              <li>✓ API Integration</li>
              <li>✓ Problem Solving</li>
            </ul>
          </div>
        </div>

        <!-- CTA -->
        <div
            class="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Projects</h3>
          <p class="text-gray-700 dark:text-gray-300 mb-6">Check out my projects!</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink
                to="/projects"
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View Projects
            </NuxtLink>
            <a
                href="https://github.com/Mattan41"
                target="_blank"
                class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

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
<script setup lang="ts">
</script>