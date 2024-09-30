<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="under-construction">
    <h1 class="blue">{{ msg }}</h1>
    <h3>
      This page is currently under construction.
    </h3>
  </div>
</template>

<style scoped>
.under-construction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  max-height: 100vh;
  text-align: center;
  padding: 2rem;
}

.under-construction a {
  font-size: 1.2rem;
  border: 1px solid;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.under-construction a:hover {
  background-color: #3498db;
}


h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.under-construction h1,
.under-construction h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .under-construction h1,
  .under-construction h3 {
    text-align: left;
  }
}
</style>
