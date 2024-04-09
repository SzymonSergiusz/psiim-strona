<script setup lang="ts">
    const props = defineProps(['place'])
</script>


<template>
  <UCard class="w-3/4 m-1.5 p-1.5" :class="color">
    <div class="flex justify-between">
        <div>
          <h2 class="text-left">{{ place }}</h2>
        </div>
      <div class="flex items-center">
        <div>
          <h2 class="text-center">Nazwa użytkownika</h2>
        </div>
      </div>
      <div class="flex items-center">
        <div>
          <p class="text-right">Liczba zdobytych osiągnięć</p>
        </div>
      </div>
    </div>
  </UCard>

</template>

<style scoped>
</style>