<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="under-construction flex flex-col items-center justify-center h-auto max-h-screen text-center p-8">
    <h1 class="font-medium text-4xl relative -top-2">{{ msg }}</h1>
    <h3 class="text-xl">This page is currently under construction.</h3>
  </div>
</template>

<style scoped>
.under-construction a {
  font-size: 1.2rem;
  border: 1px solid;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.under-construction a:hover {
  background-color: #3498db;
}

@media (min-width: 1024px) {
  .under-construction h1,
  .under-construction h3 {
    text-align: left;
  }
}
</style>