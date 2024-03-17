<script setup lang="ts">
let id = 1
</script>

<template>
  <UCard class="w-1/5 m-1" >

    <template #header>
      <h1>Nazwa góry/schroniska</h1>
    </template>
    <template #default>
      <NuxtImg src="/mountain.webp" class=""></NuxtImg>

    </template>

    <template #footer>
      Krótki opis + Tutaj źródło zdjęcia?
      <UButton to="/mountain{{id}}">
        Więcej
      </UButton>
    </template>
  </UCard>
</template>

<style scoped>

</style>