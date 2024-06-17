<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MountainCard from "~/components/MountainCard.vue";

const config = useRuntimeConfig();
const serverUrl = config.public.serverUrl;

const achievedMountains = ref([]);
const notAchievedMountains = ref([]);
const collectedByUser = ref(0) 
const collectionSize = ref(0)

async function getMountains() {
  try {
    const response = await fetch(`${serverUrl}/api/mountains/users_mountains`, {
    headers: {
    'Authorization': `Bearer ${localStorage.getItem("access_token")}`,
    'Accept': 'application/json'
  }
});

    if (response.status === 401) {
          throw new Error('Unauthorized');
        }
    const data = await response.json();
    achievedMountains.value = data.achieved;
    notAchievedMountains.value = data.not_achieved;
    collectedByUser.value = data.achieved_count;
    collectionSize.value = data.achieved_count + data.not_achieved_count;
  } catch (error) {
    if (error.message === 'Unauthorized') {
      window.location.replace('/login');
      }
      console.log(error);
    }
}

onMounted(() => {
  getMountains();
});



</script>

<template>
<!--  https://ui.nuxt.com/components/progress -->
<!--https://ui.nuxt.com/components/skeleton to można dodać aby był placeholder w trakcie pobierania danych-->
<!--  https://ui.nuxt.com/components/notification-->

  <div class="p-2.5 m-2.5">
    <h2 >Twoje postępy: {{ collectedByUser }} / {{ collectionSize }} </h2>
    <UProgress :value="collectedByUser" :max="collectionSize"/>
  </div>


    <div class="overflow-x-auto flex flex-wrap justify-items-center justify-center">
      <MountainCard v-for="mountain in achievedMountains" :key="mountain.mountain_id" :mountain="mountain"/>
    </div>




</template>

<style scoped>

</style>