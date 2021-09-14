<template>
    <div class="Question" v-bind="plant">
      <div class="w-1/2 bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <div class="header-card flex justify-between font-semibold">
          <div class="">Team members</div>
          <div class="flex items-center gap-x-1 text-sm text-blue-500">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>
            <span>See all</span>
          </div>
        </div>
      </div>
        <div>{{plant.id}}</div>
        <div>{{plant.latinName}}</div>
        <div>{{plant.germanName}}</div>
      <img :src="randomPlantImage" v-bind:alt="plant.germanName">
    </div>
</template>

<script>
    export default {
      name: 'Question',
      props: ['plant'],
      computed: {
        randomPlantImage() {
          return require(`@/assets/images/plants/` + this.plant.images[Math.floor(Math.random()*this.plant.images.length)])
        }
      }
    };
</script>
