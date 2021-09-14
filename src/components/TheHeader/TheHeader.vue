<template>
  <header class="w-full bg-white bg-glass-morphic">
    <div class="header-flex-container">
      <router-link to="/" class="rounded border-black items-center mb-2 sm:mb-0"><span class="text-meridian-gradient text-3xl">Plant-Guessr</span></router-link>
      <nav class="flex flex-wrap items-center text-base justify-around">
        <router-link to="/gallery" class="outlined-button">Galerie</router-link>
        <router-link to="/quiz" class="outlined-button">Quiz</router-link>
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
.header-flex-container {
  @apply container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center justify-around
}
</style>
