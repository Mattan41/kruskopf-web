<template>
  <article class="project-detail max-w-7xl mx-auto p-4 sm:p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NuxtLink to="/projects" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-3xl sm:text-4xl font-bold mb-4">Unseen Servant</h1>

    <ProjectStatus status="ongoing" />

    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm sm:text-base">Vue.js 3</span>
      <span class="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200 rounded-full text-sm sm:text-base">Spring Boot</span>
      <span class="px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200 rounded-full text-sm sm:text-base">MySQL</span>
      <span class="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200 rounded-full text-sm sm:text-base">Pinia</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm sm:text-base">Tailwind CSS</span>
      <span class="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 rounded-full text-sm sm:text-base">OAuth2 & JWT</span>
      <span class="px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200 rounded-full text-sm sm:text-base">Docker</span>
      <span class="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 rounded-full text-sm sm:text-base">TTRPG / 5e</span>
    </div>

    <!-- About Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">About the Project</h2>
      <p class="text-base sm:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
        Unseen Servant is a full-stack campaign tracking and character management application designed for tabletop RPG groups playing Dungeons & Dragons 5e.
        Originally built as my graduation thesis project at IT-Högskolan, it continues to be actively maintained and developed as a hobby project.
      </p>
      <p class="text-base sm:text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
        The system connects a Vue 3 frontend to a modular Spring Boot REST API backed by MySQL.
        The live instance is hosted self-hosted on a local mini-PC, exposed securely to the web via a Cloudflare Tunnel.
      </p>
    </section>

    <!-- Key Features -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
          <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Campaign Management</h3>
          <ul class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <li>Role-based participant controls (Gamemaster vs. Player)</li>
            <li>Campaign roster tracking and status management</li>
            <li>Import characters directly into active campaigns</li>
          </ul>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
          <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Character Builder & Tracking</h3>
          <ul class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <li>D&D 5e character creation and live sheet updates</li>
            <li>File upload service for custom character portraits</li>
            <li>Offline/Guest demo mode backed by LocalStorage</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Technical Architecture -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technical Architecture</h2>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Frontend Stack</h3>
      <ul class="list-disc list-outside ml-5 space-y-2 text-base sm:text-lg mb-4 text-gray-700 dark:text-gray-300">
        <li>Vue 3 with Composition API and script setup syntax</li>
        <li>Pinia for reactive and centralized client state</li>
        <li>Vue Router with authenticated route guards</li>
        <li>Tailwind CSS for responsive interface design and Vite for fast builds</li>
        <li>Axios with centralized interceptors for JWT token handling</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Backend Stack</h3>
      <ul class="list-disc list-outside ml-5 space-y-2 text-base sm:text-lg mb-4 text-gray-700 dark:text-gray-300">
        <li>Java & Spring Boot with modular RESTful controller layer</li>
        <li>Spring Data JPA / Hibernate mapped to MySQL</li>
        <li>Spring Security with dual OAuth2 login (Google & GitHub) and JWT issuance</li>
        <li>Role and whitelist verification layer (Admin/User access controls)</li>
        <li>Multipart file storage service for portrait asset handling</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">DevOps & Hosting</h3>
      <ul class="list-disc list-outside ml-5 space-y-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
        <li>Automated CI/CD via GitHub Actions building and pushing multi-platform images to Docker Hub</li>
        <li>Container orchestration with Docker Compose</li>
        <li>Self-hosted on Linux mini-PC with ingress handled through Cloudflare Tunnel</li>
      </ul>
    </section>

    <!-- Configuration & Demo Note -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Access & Testing Modes</h2>
      <div class="bg-yellow-50 dark:bg-yellow-950/40 border-l-4 border-yellow-400 dark:border-yellow-500 p-4 mb-4 rounded-r-lg">
        <p class="text-base sm:text-lg text-gray-800 dark:text-gray-200">
          <strong>Live Access Notice:</strong> Production access at unseenservant.se is restricted with strict OAuth2 whitelist controls.
        </p>
        <p class="mt-2 text-base sm:text-lg text-gray-700 dark:text-gray-300">
          For local evaluation and testing without OAuth2 credentials, two separate demo paths are supported:
        </p>
        <ul class="list-disc list-outside ml-5 mt-2 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300">
          <li>
            <strong>Guest Demo Mode (Frontend only):</strong> Decoupled, offline mode running entirely in-browser via a <code class="bg-gray-200 dark:bg-gray-800 px-1 rounded text-sm sm:text-base">LocalStorage</code> adapter with seeded mock data (no backend setup required).
          </li>
          <li>
            <strong>Full-Stack Demo Mode (Form Login):</strong> Start the backend with <code class="bg-gray-200 dark:bg-gray-800 px-1 rounded text-sm sm:text-base">--spring.profiles.active=demo</code> (in-memory H2 database with test accounts) and the frontend via <code class="bg-gray-200 dark:bg-gray-800 px-1 rounded text-sm sm:text-base">npm run demo</code> to log in using preloaded credentials without third-party providers.
          </li>
        </ul>
      </div>
    </section>

    <!-- Technologies Grid -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technologies Used</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
          <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Frontend</h3>
          <ul class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <li>Vue.js 3</li>
            <li>Pinia</li>
            <li>Tailwind CSS</li>
            <li>Vite</li>
            <li>Axios</li>
          </ul>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
          <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Backend</h3>
          <ul class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <li>Java & Spring Boot</li>
            <li>Spring Data JPA</li>
            <li>Spring Security</li>
            <li>MySQL & H2 Database</li>
            <li>Maven</li>
          </ul>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
          <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Authentication & Security</h3>
          <ul class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <li>JSON Web Tokens (JWT)</li>
            <li>Google OAuth2</li>
            <li>GitHub OAuth2</li>
            <li>Role-Based Access Control</li>
          </ul>
        </div>
        <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
          <h3 class="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">Deployment & DevOps</h3>
          <ul class="list-disc list-outside ml-5 space-y-1 text-base sm:text-lg text-gray-700 dark:text-gray-300">
            <li>Docker & Docker Hub</li>
            <li>Docker Compose</li>
            <li>Cloudflare Tunnels</li>
            <li>GitHub Actions CI/CD</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Links / CTA -->
    <div class="flex flex-wrap gap-4 mt-8">
      <a
          href="https://unseenservant.se"
          target="_blank"
          class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
      >
        Try it Live
      </a>
      <a
          href="https://github.com/Mattan41/unseenservant-backend"
          target="_blank"
          class="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors font-medium"
      >
        View Backend on GitHub
      </a>
      <a
          href="https://github.com/Mattan41/unseenservant-frontend"
          target="_blank"
          class="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors font-medium"
      >
        View Frontend on GitHub
      </a>
    </div>
  </article>
</template>