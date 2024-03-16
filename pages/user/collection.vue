<script setup lang="ts">

import MountainCard from "~/components/MountainCard.vue";

let collectedByUser = ref(20) //todo póki nie ma serweera
let collectionSize = ref(100)
</script>

<template>
<!--  https://ui.nuxt.com/components/progress -->
<!--https://ui.nuxt.com/components/skeleton to można dodać aby był placeholder w trakcie pobierania danych-->
<!--  https://ui.nuxt.com/components/notification-->

  <div class="p-2.5 m-2.5">
    <h2 >Twoje postępy: {{ collectedByUser }} / {{ collectionSize }} </h2>
    <UProgress :value="collectedByUser" :max="collectionSize"/>
  </div>


    <div class="overflow-x-auto flex flex-wrap justify-items-center justify-start">

        <MountainCard  v-for="index in collectedByUser" :key="index"/>

    </div>




</template>

<style scoped>

</style>