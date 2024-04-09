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
  <div class="flex justify-center">

    <div class="flex flex-col items-center w-5/6 ">
      <UserCardRanking :place="1"/>
      <UserCardRanking :place="2"/>
      <UserCardRanking :place="3"/>
      <UserCardRanking :place="4"/>
      <UserCardRanking :place="5"/>
      <UserCardRanking :place="6"/>
      <UserCardRanking :place="7"/>
      <UserCardRanking :place="8"/>
      <UserCardRanking :place="9"/>
      <UserCardRanking :place="10"/>
    </div>
  </div>



</template>

<style scoped>

</style>