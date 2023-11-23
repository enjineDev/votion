<script setup lang="ts">
import { ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { Lotion, registerBlock } from '@dashibase/lotion'
import '@dashibase/lotion/lib/style.css'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import {
  MdDragindicator,
  HiTrash,
  HiPlus,
  HiSolidSearch,
  BiTextLeft,
  BiTypeH1,
  BiTypeH2,
  BiTypeH3,
  BiHr,
  BiQuote
} from "oh-vue-icons/icons"

addIcons(
  MdDragindicator,
  HiTrash,
  HiPlus,
  HiSolidSearch,
  BiTextLeft,
  BiTypeH1,
  BiTypeH2,
  BiTypeH3,
  BiHr,
  BiQuote
)

const nuxtApp = useNuxtApp()

nuxtApp.vueApp.component("v-icon", OhVueIcon)

const page = ref({})

// Watch for changes in the `page` ref
watch(page, (newPage, oldPage) => {
  // Call your composable or function here to save the blocks
  if (page.value) {
    putData(page.value.slug, newPage)
  }
}, { deep: true })

onBeforeMount(async () => {
  page.value = await fetchData()
})
</script>

<template>
  <Lotion :page="page" class="pt-8"/>
</template>
