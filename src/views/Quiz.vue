<template>
    <div class="container mx-auto bg-white text-white">
        <h1>Hello Quiz!</h1>
        <router-link :to="{ name:'Question', params: { id: key }}">Hello World!</router-link>
        <router-view v-model:key="plant.id" v-model:plant="plant"></router-view>
      <div v-for="_plant in model">
        <div>{{_plant.id}}</div>
        <div>{{_plant.latinName}}</div>
        <div>{{_plant.germanName}}</div>
        <div>{{_plant.images[0]}}</div>
      </div>

    </div>
</template>

<script>
    const staticData = require("@/data");
    export default {
      name: 'Quiz',
      props: [
          'model'
      ],
      // computed() {
      //   return this.plants[Math.floor(Math.random()*this.plants.length)].id;
      // },
      // mounted() {
      //   this.plant = this.plants[Math.floor(Math.random()*this.plants.length)];
      // }
    };
</script>
