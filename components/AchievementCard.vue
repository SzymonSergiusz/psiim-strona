<script setup lang="ts">
const props = defineProps(['isUnlocked'])
console.log(props.isUnlocked)
let icon = ''
let color = ''
if (props.isUnlocked) {
  color = 'text-green-600'
  icon = 'i-heroicons-lock-open'
} else {
  color = 'text-gray-600'
  icon = 'i-heroicons-lock-closed'

}

console.log(color)


</script>
<template>
  <UCard class="w-3/4 m-1.5 p-1.5" :class="color">
    <div class="flex justify-between">
      <div class="flex items-center">
        <div class="mr-1">
          <UIcon class="size-6" :name="icon"/>
        </div>
        <div>
          <h2 class="text-center">Nazwa osiągnięcia</h2>
        </div>
      </div>
      <div class="flex items-center">
        <div>
          <p class="text-left">Opis za co jest osiągnięcie</p>
        </div>
      </div>
      <div v-if="isUnlocked" class="flex items-center">
        <div>
          <p class="text-right">Data osiągnięcia</p>
        </div>
      </div>
      <div v-else class="w-1/5 items-center">
        <h2>Postęp: x/y</h2>
        <UProgress class="" :value="2" :max="10"/>
      </div>


    </div>
  </UCard>

</template>

<style scoped>
</style>