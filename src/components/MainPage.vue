<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Program from './Program.vue'
import PracticalInformations from './PracticalInformations.vue'
import { useMainStore } from '../store/main.store'
import Home from './Home.vue'
import Volunteer from './Volunteer.vue'

const mainStore = useMainStore()

const page = computed(() => mainStore.page)
const isMobile = ref(window.screen.height > window.screen.width)
onBeforeMount(() => {
  mainStore.initActivities()
  if(window.location.hash) {
    mainStore.changePage(window.location.hash.replace('#',''))
  }

})
watch(page, () => {
  window.location.hash = page.value
})
</script>

<template>

  <div :class="`application ${isMobile? 'mobile' : 'desktop'}`">
    <Header class="header"/>
    <div class="container">
      <Program v-if="page === 'events'" class="content" event_type='events'/>
      <Program v-else-if="page === 'rpg'" class="content" event_type='rpg' />
      <Volunteer v-else-if="page === 'volunteer'" class="content" />
      <PracticalInformations v-else-if="page === 'info'" class="content"/>
      <Home v-else class="content"></Home>
    </div>
    <Footer class="footer"/>
    </div>
  </template>

<style scoped>
.read-the-docs {
  color: #888;
}
.application {
  display:flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-image: url('/src/assets/fond_affiche.jpg');
  height: 100vh;
  background-size: auto 100vh;
  background-repeat: no-repeat;

  .fit {
    object-fit:fill;
    width: 100%;
    height: 100%;
  }
  &.desktop{
    max-width: 80vh;
    margin-left: auto;
    margin-right: auto;
  }
}
.container {
    overflow-y: auto;
    width: 100%;
    min-height: 80vh;
    scrollbar-color: rgba(0,0,0,0.4) rgba(0,0,0,0.1);
  background-color: rgba(0,0,0,0.4);
}
.header {
  flex: 0,0, 10vh;
  min-height: 10vh;

  background-color: rgba(0,0,0,0.4);
}
.content {
  flex: 0, 0, 80vh;
  min-height: 80vh;
  overflow: hidden;

}
.footer {
  flex: 0,0, 10vh;
  min-height: 10vh;

  background-color: rgba(0,0,0,0.4);
}
</style>
