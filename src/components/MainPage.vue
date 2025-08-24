<script setup lang="ts">
import { computed } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Program from './Program.vue'
import PracticalInformations from './PracticalInformations.vue'
import { useMainStore } from '../store/main.store'
import Home from './Home.vue'
import Volunteer from './Volunteer.vue'

const mainStore = useMainStore()

const page = computed(() => mainStore.page)

const isMobile = window.screen.height > window.screen.width


// TODO : replace that with script from google api
function fetchEvents() {
  return [
    {
        "title": "Jeux libres",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": false
    },
    {
        "title": "Loup Garou Géant",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": false
    },
    {
    "title": "Tournoi de Magic, the Gathering Duel Commander - 64 places",
    "description": "À 10h30, un tournoi de Magic the Gathering, au format Duel Commander, est organisé. Un prize pool minimum est garanti et l'entrée aux 24h du jeux est incluse dans la finance d'inscription de 30.-.",
    "link": "perdu.com",
    "prize_wall": "perdu.com",
    "poster": "perdu.com",
    "show_link": true,
    "link_text":"S'inscrire",
    "showsubscribed": false,
    "max": 0,
    "subscribed": 0
    },
    {
        "title": "Tournoi de One Piece - 64 places",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": false
    },
    {
        "title": "Tournoi de Mind Bug",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 12,
        "max": 12,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": true
    },
    {
        "title": "Tournoi de Jass",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": true,
        "show_subscribed": false
    },
    {
        "title": "Tournoi d'échecs",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": true
    },
    {
        "title": "Initiation aux échecs",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 5,
        "max": 12,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": true,
        "show_subscribed": true
    },
    {
        "title": "Tournoi de Pierre - Feuille - Ciseau",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "Aller sur la page d'inscription",
        "show_link": true,
        "show_subscribed": true
    },
    {
        "title": "Le Grand Quizz de Tard dans la nuit",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "Aller sur la page d'inscription",
        "show_link": true,
        "show_subscribed": true
    },
    {
        "title": "Le Draft de Minuit",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "Aller sur la page d'inscription",
        "show_link": true,
        "show_subscribed": true
    },
    {
        "title": "Du Jeu de Rôle",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, ainsi que par l'Ornithorynque et le Ludesco.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "Aller sur la page d'inscription",
        "show_link": true,
        "show_subscribed": true
    },
]
}

function fetchRpgEvents() {
  return [
    {
        "title": "Le programme des jeux de rôles arrive prochainement",
        "description": "Nos maîtres du jeu sont en train de travailler activement pour vous proposer une animation jeu de rôle durant l'intégralité de l'événement. Chaque fois qu'une partie deviendra disponible, nous l'ajouterons à cette page avec un lien pour vous y inscrire."
    }
    
]
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
