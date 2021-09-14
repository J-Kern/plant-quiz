<template>
  <header class="glass-morphism body-font border-b border-gray-200" id="nav">
    <div class="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center justify-around">
      <router-link to="/" class="rounded-3xl border-black items-center mb-4 sm:mb-0"><span class="primary-button text-4xl">Plant-Guessr</span></router-link>
      <nav class="flex flex-wrap items-center text-base justify-around">
        <router-link to="/gallery" class="mr-5 hover:text-gray-900 router-element">Galerie</router-link>
        <router-link to="/quiz" class="mr-5 hover:text-gray-900 router-element">Quiz</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'TheHeader'
    };
</script>

<style scoped>
nav .router-element {
  @apply p-4 border-2 border-green-600 rounded-lg px-3 py-2 text-green-900 cursor-pointer hover:bg-green-600 hover:text-green-200 transition-all
}
</style>
