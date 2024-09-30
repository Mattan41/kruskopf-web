<template>
  <div class="about">
    <h1>About Me</h1>
    <h3> This is some information about me: </h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</template>

<style>

.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.about h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.about p {
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
