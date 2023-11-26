<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

useHead({
  title: 'Votion'
})

onCreated(() => {
  AOS.init()
})
</script>

<template>
  <div class="prose lg:prose-xl">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style>
</style>
