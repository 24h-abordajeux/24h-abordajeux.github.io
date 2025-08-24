<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Program from './Program.vue'
import PracticalInformations from './PracticalInformations.vue'
import { useMainStore } from '../store/main.store'
import Home from './Home.vue'
import events from "/src/assets/events.json"
import events_rpg from "/src/assets/events_rpg.json"
import Volunteer from './Volunteer.vue'

const mainStore = useMainStore()

const page = computed(() => mainStore.page)

const isMobile = window.screen.height > window.screen.width

/**
 * 
 */

// TODO : replace that with script
function fetchEvents() {
  const events_plus = events
/*   events_plus.push({
    "title": "Tournoi de Magic, the gathering Duel Commander - 64 places",
    "description": "À 10h30, un tournoi de Magic the Gathering, au format Duel Commander, est organisé. Un prize wall minimum est garanti et l'entrée aux 24h du jeux est incluse dans la finance d'inscription.",
    "link": "perdu.com",
    "prize_wall": "a",
    "poster": "b",
    "show_link": true,
    "link_text":"allez viens",
    "showsubscribed": false,
    "max": 0,
    "subscribed": 0,
  }) */
  return events_plus
}

function fetchRpgEvents() {
  return events_rpg
}

</script>

<template>

  <div :class="`application ${isMobile? 'mobile' : 'desktop'}`">
    <Header class="header"/>
    <div class="container">
      <Program v-if="page === 'program'" class="content" :events="fetchEvents()"/>
      <Program v-else-if="page === 'rpg'" class="content" :events="fetchRpgEvents()" />
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
  background-image: url('/src/assets/fond_affiche.png');
  height: 100vh;
  background-size: auto 100vh;
  background-repeat: no-repeat;

  .fit {
    object-fit:fill;
    width: 100%;
    height: 100%;
  }
  &.mobile {
  }
  &.desktop{
    max-width: 80vh;
    margin-left: auto;
    margin-right: auto;
  }
}
.container {
    overflow: scroll;
    width: 100%;
    min-height: 80vh;

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
  overflow-y: scroll;

}
.footer {
  flex: 0,0, 10vh;
  min-height: 10vh;

  background-color: rgba(0,0,0,0.4);
}
</style>
