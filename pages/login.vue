<script setup lang="ts">

import type {FormSubmitEvent} from "#ui/types";
import {email, type Input, minLength, objectAsync, string} from "valibot";

const route = useRoute()

const schema = objectAsync({
  email: string([email('Niepoprawny email')]),
  password: string([])
})

type Schema = Input<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data)
}
</script>

<template>
  <div class="w-1/4">
    <UForm :schema="schema" :state="state" @submit="onSubmit" class="space-y-4">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" placeholder="Podaj swój email" icon="i-heroicons-envelope"></UInput>
      </UFormGroup>

      <UFormGroup label="Hasło" name="password">
        <UInput v-model="state.password" placeholder="Wpisz hasło" icon="i-heroicons-lock-closed"></UInput>
      </UFormGroup>

      <UButton type="submit">
        Zaloguj się
      </UButton>
    </UForm>

  </div>
</template>
