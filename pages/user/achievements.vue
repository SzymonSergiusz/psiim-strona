<script setup lang="ts">
const links = [{
  label: 'Odblokowane',
  icon: "i-heroicons-lock-open"
},
  {
    label: 'Do odblokowania',
    icon: "i-heroicons-lock-closed"
  }

]
</script>
<!--https://ui.nuxt.com/components/tabs#slots-->
<template>
  <div class="p-2.5 m-2.5">
    <h2 >Twoje postępy: </h2>
    <UProgress :value="0" :max="10"/>
  </div>
  <div class="flex justify-center">

    <div class="flex flex-col items-center w-5/6 ">
      <AchievementCard :is-unlocked="true"/>
      <AchievementCard :is-unlocked="true"/>
      <AchievementCard :is-unlocked="true"/>
      <AchievementCard :is-unlocked="true"/>
      <AchievementCard :is-unlocked="false"/>
      <AchievementCard :is-unlocked="false"/>
      <AchievementCard :is-unlocked="false"/>
    </div>
  </div>



</template>

<style scoped>

</style>