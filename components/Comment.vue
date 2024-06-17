<script setup lang="ts">
import { ref } from 'vue';
import { defineProps } from 'vue';

// Definicja typów dla właściwości komponentu
const props = defineProps({
  comment: {
    type: Object,
    required: true
  }
});

// Pobieranie właściwości (props) w komponencie
const isFormVisible = ref(false);

// Funkcja do przełączania widoczności formularza
const toggleFormVisibility = () => {
  isFormVisible.value = !isFormVisible.value;
};
</script>

<template>
  <div class="comment border border-gray-300 p-4 mb-4 rounded-lg bg-slate-900">
    <div class="comment-header flex justify-between mb-2">
      <span class="comment-username font-bold">{{ comment.username }}</span>
      <span class="comment-date text-gray-400 text-sm">{{ comment.created_at }}</span>
    </div>
    <div class="comment-content text-base leading-relaxed">
      {{ comment.content }}
    </div>
    <!-- Toggle button to show/hide the form -->
    <button @click="toggleFormVisibility" class="mt-2 text-gray-400 hover:text-gray-200">
      <span v-if="isFormVisible"> ▼ Schowaj odpowiedzi</span>
      <span v-else> ▶ Pokaż odpowiedzi</span>
    </button>
    <!-- Conditionally render the form -->
    <UForm v-if="isFormVisible" class="p-1 m-1">
      <CommentReply v-for="reply in comment.responses" :key="reply.comment_id" :comment="reply" />
      <UTextarea placeholder="Wpisz odpowiedź"></UTextarea>
      <UButton class="mt-2">Odpowiedz</UButton>
    </UForm>
  </div>
</template>

<!-- <style scoped>
/* Optional: Add some additional styling to your button */
button {
  background: none;
  border: none;
  cursor: pointer;
}
</style> -->