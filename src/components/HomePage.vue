<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="under-construction flex flex-col items-center justify-start h-auto text-center p-8">
    <h1 class="font-medium text-4xl relative -top-2">{{ msg }}</h1>
    <h3 class="text-xl italic whitespace-nowrap animate-bouncing-banner">This page is currently under construction.</h3>
  </div>
</template>

<style scoped>

.animate-bouncing-banner {
  animation: bouncing-banner 2s linear infinite;
}

@media (min-width: 1024px) {
  .under-construction h1,
  .under-construction h3 {
    text-align: left;
  }
}
</style>