<template>
  <header :class="{ 'scrolled': !view.atTopOfPage, 'notScrolled': view.atTopOfPage }" class="w-full sticky z-50 top-0 transition-all ease-in-out duration-500">
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
      name: 'TheHeader',
      data() {
        return {
          view: {
            atTopOfPage: true
          }
        }
      },
      beforeMount () {
        window.addEventListener('scroll', this.handleScroll);
      },
      methods: {
        handleScroll(){
          if(window.pageYOffset>0){
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
          }else{
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
          }
        }
      }
    };
</script>

<style scoped>
.header-flex-container {
  @apply container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center justify-around
}
.scrolled {
  @apply bg-white shadow-2xl border-b-0;
}
.notScrolled {
  @apply bg-white bg-glass-morphic
}
</style>
