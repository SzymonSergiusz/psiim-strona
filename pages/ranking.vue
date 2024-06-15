<script setup lang="ts">
// import { ref, onMounted } from 'vue';
// import UserCardRanking from '~/components/UserCardRanking.vue';

const links = [{
  label: 'Odblokowane',
  icon: "i-heroicons-lock-open"
},
  {
    label: 'Do odblokowania',
    icon: "i-heroicons-lock-closed"
  }

]

const config = useRuntimeConfig();
const serverUrl = config.public.serverUrl;

const ranking = ref([]);

async function getRanking() {
  try {
    const response = await fetch(`${serverUrl}/ranking`);
    const data = await response.json();
    // ranking.value = data.ranking;
    ranking.value = data.ranking.sort((a, b) => b.count - a.count);
    console.log(ranking.value)
    console.log(data)
  } catch (error) {
    console.error('Error fetching ranking:', error);
  }
}

onMounted(() => {
  getRanking();
});


</script>
<!--https://ui.nuxt.com/components/tabs#slots-->
<template>
  <div class="flex justify-center">

    <div class="flex flex-col items-center w-5/6 ">
      <UserCardRanking v-for="(r, index) in ranking" :key="r.username" :username="r.username" :count="r.count" :rank="index + 1" />
    </div>
  </div>



</template>

<style scoped>

</style>