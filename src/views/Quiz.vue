<template>
    <div class="container rounded-xl mx-auto my-6 flex flex-col items-center justify-center bg-white bg-glass-morphic text-black">
        <h1>Hello Quiz!</h1>
        <router-link :to="{ name:'Question', params: { id: this.plant.id }}" :props="this.plant">Hello World!</router-link>
        <router-view :props="this.plant"></router-view>
      <div v-for="_plant in plants">
        <div v-text="_plant.id"></div>
        <div v-text="_plant.latinName"></div>
        <div v-text="_plant.germanName"></div>
        <div v-text="_plant.images[0]"></div>
      </div>

    </div>
</template>

<script>
    import _plants from "@/data/plants";

    const staticData = require("@/data");
    export default {
      name: 'Quiz',
      props: [
          'plants'
      ],
      data() {
        return {
          plants: _plants,
          plant: _plants[Math.floor(Math.random()*_plants.length)]
        }
      },
      methods() {
        return {
          getRandomPlant: () => {
            return this.data().plants[Math.floor(Math.random()*this.data().plants.length)];
          }
        }
      }
    };
</script>
