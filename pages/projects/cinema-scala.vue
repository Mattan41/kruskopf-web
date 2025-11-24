<template>
  <article class="project-detail max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <NuxtLink to="/projects" class="text-blue-500 hover:underline mb-4 inline-block">
      ← Back to Projects
    </NuxtLink>

    <h1 class="text-4xl font-bold mb-4">Cinema Scala</h1>

    <ProjectStatus status="academic" />

    <div class="flex flex-wrap gap-2 mb-6">
      <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full">Vue.js</span>
      <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full">Spring Boot</span>
      <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">OAuth2</span>
      <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">MySQL</span>
      <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full">TMDB API</span>
      <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Google Authentication</span>
    </div>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">About the Project</h2>
      <p class="text-lg leading-relaxed mb-4">
        Cinema Scala is a full-stack cinema booking system that demonstrates modern web
        application architecture with separate frontend and backend services.
      </p>
      <p class="text-lg leading-relaxed mb-4">
        The frontend is built with Vue.js, providing a responsive and intuitive user interface
        for browsing movies and managing bookings. The backend is powered by Spring Boot,
        handling business logic, authentication, and database operations.
      </p>
      <p class="text-lg leading-relaxed">
        The application integrates with Google OAuth2 for secure user authentication and
        TMDB (The Movie Database) API for rich movie data and metadata.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">User Features</h3>
      <ul class="list-disc list-inside space-y-2 text-lg mb-4">
        <li>Create account and login with Google OAuth2</li>
        <li>Browse available movies from TMDB</li>
        <li>View movie details and showtimes</li>
        <li>Book cinema tickets</li>
        <li>Manage personal bookings</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Admin Features</h3>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Access dedicated admin panel</li>
        <li>Schedule movie viewings</li>
        <li>Manage cinema showings</li>
        <li>Configure screening times and theaters</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technical Architecture</h2>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Frontend</h3>
      <ul class="list-disc list-inside space-y-2 text-lg mb-4">
        <li>Vue.js 3 with Composition API</li>
        <li>Vue Router for navigation</li>
        <li>Responsive design</li>
        <li>RESTful API integration</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Backend</h3>
      <ul class="list-disc list-inside space-y-2 text-lg mb-4">
        <li>Spring Boot framework</li>
        <li>Spring Security with OAuth2</li>
        <li>MySQL database</li>
        <li>RESTful API endpoints</li>
        <li>JPA/Hibernate for data persistence</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 text-gray-700">Authentication & APIs</h3>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Google OAuth2 authentication (requires Client ID & Client Secret)</li>
        <li>TMDB API integration (requires Access Token)</li>
        <li>Secure session management</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Configuration Requirements</h2>
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <p class="text-gray-700">
          <strong>Note:</strong> To run this application, you need to configure:
        </p>
        <ul class="list-disc list-inside mt-2 text-gray-700">
          <li>Google OAuth2 Client ID and Client Secret</li>
          <li>TMDB API Access Token</li>
          <li>MySQL database connection</li>
        </ul>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">Technologies Used</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Frontend</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Vue.js 3</li>
            <li>Vue Router</li>
            <li>Axios</li>
            <li>HTML5/CSS3</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Backend</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Spring Security</li>
            <li>Spring Data JPA</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">Authentication</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>OAuth2</li>
            <li>Google Identity Platform</li>
            <li>JWT (optional)</li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-2">External APIs</h3>
          <ul class="list-disc list-inside space-y-1">
            <li>TMDB (The Movie Database)</li>
            <li>Google OAuth2 API</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4">What I Learned</h2>
      <ul class="list-disc list-inside space-y-2 text-lg">
        <li>Implementing OAuth2 authentication flow</li>
        <li>Building full-stack applications with separate frontend/backend</li>
        <li>Working with external APIs (TMDB)</li>
        <li>Role-based access control (user vs admin)</li>
        <li>Managing application secrets and configuration</li>
        <li>RESTful API design and implementation</li>
        <li>Database schema design for booking systems</li>
      </ul>
    </section>

    <div class="flex gap-4 mt-8">
      <a
          href="https://github.com/Mattan41/cinema-scala"
          target="_blank"
          class="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
      >
        View on GitHub
      </a>
    </div>
  </article>
</template>