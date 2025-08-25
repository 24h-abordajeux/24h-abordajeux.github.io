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
        "title": "Des Jeux libres",
        "description": "Durant tout l'événement, nos bénévoles sont à votre disposition pour vous aider à choisir, et comprendre, les jeux mis à dispositions pour l'occasion par l'association, l'Ornithorynque et le Ludesco.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": false
    },
    {
        "title": "Du Jeu de Rôle",
        "description": "Vous n'êtes pas sur la bonne page si vous souhaitez vous inscrire aux tables de jeux de rôle, mais on m'a demandé de vous informer ici que durant tout l'événement, diverses aventures et scénarios épiques vous seront proposés par nos maîtres de jeux.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "Aller sur la page d'inscription",
        "show_link": false,
        "show_subscribed": false
    },
    {
        "title": "Loup Garou Géant",
        "description": "Le plus connu des jeux sociaux arrive ici en version géante. Aux alentours de minuits, trois villages vont se réveiller et tenter de survivre. Resterez vous fidèle à votre village et essayerez vous de gagner là, ou déménagerez-vous vers des horizons plus prospère ? Les inscriptions ouvrent bientôt.",
        "subscribed": 0,
        "max": 60,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": true
    },
    {
    "title": "Tournoi de Magic, the Gathering Duel Commander - 64 places",
    "description": "À 10h30, un tournoi de Magic the Gathering, au format Duel Commander, est organisé. Un prize pool minimum est garanti et l'entrée aux 24h du jeu est incluse dans la finance d'inscription de 30.-.",
    "link": "perdu.com",
    //"prize_wall": "perdu.com",
    //"poster": "perdu.com",
    "show_link": false,
    "link_text":"S'inscrire",
    "showsubscribed": false,
    "max": 0,
    "subscribed": 0
    },
    {
        "title": "Tournoi de One Piece TCG - 64 places",
        "description": "Ouvrant le bal dès 10h, la communauté One Piece de Neuchâtel propose un tournoi à 64 places. Que vous soyez un nouveau venu où un joueur aguerri, venez tester vos stratégies dans la bonne humeur.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": false
    },
    {
        "title": "Tournoi de Mindbug",
        "description": "Venez vous affronter lors d’un tournoi amical de Mindbug, le jeu à 2 joueurs du créateur de MTG. Que vous soyez un expert des jeux de carte compétitifs ou un amateur de jeux simples mais demandant de la réflexion, vous y trouverez votre compte ! Tentez de sortir vainqueur des 4 manches et remportez des récompenses Mindbug exclusives. Les inscriptions ouvrent prochainement.",
        "subscribed": 0,
        "max": 16,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": true
    },
    {
        "title": "Tournoi de Chibre (Jass)",
        "description": "Prêt à montrer vos talents au Chibre (Jass) ? Que vous soyez débutant ou joueur aguerri, affrontez d’autres participants dans une ambiance conviviale et pleine de bonne humeur. Stratégie et éclats de rire au rendez-vous. venez tenter votre chance et décrocher la victoire ! Les inscriptions ouvrent prochainement.",
        "subscribed": 0,
        "max": 64,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": true
    },
    {
        "title": "Tournoi d'échecs",
        "description": "Avec le soutien du club d'échecs de Neuchâtels, un petit tournoi d'échecs vous est proposé. Plus de nouvelles à ce sujet prochainement.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "s'inscrire",
        "show_link": false,
        "show_subscribed": false
    },
    {
        "title": "Tournoi de Pierre - Feuille - Ciseau",
        "description": "À un moment durant la nuit, lorsque la cafféine et la bonne humeur seront les dernières ressources à vous maintenir éveillé·e·s, une petite compétition bon enfant sur un jeu universel et simple vous sera proposé afin de raviver la flamme et vous permettre de tenir jusqu'au matin.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "Aller sur la page d'inscription",
        "show_link": false,
        "show_subscribed": false
    },
    {
        "title": "Le Grand Quizz de Tard dans la nuit",
        "description": "Une petite activité nocturne avec des questions plus ou moins sérieuses pour des réponses qui le sont tout autant.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "Aller sur la page d'inscription",
        "show_link": false,
        "show_subscribed": false
    },
    {
        "title": "Le Draft de Minuit",
        "description": "Aux alentours de Minuit, les joueur·se·s de magic seront invité·e·s à participer à une ou plusieurs tables de draft nocturnes. Des éditions au thème nocturne, un petit twist durant le draft, voire les parties, des ingrédients parfaits pour une petite expérience hors des formats conventionnels.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "Aller sur la page d'inscription",
        "show_link": false,
        "show_subscribed": false
    },
    {
        "title": "Se Nourrir",
        "description": "Durant tout l'événements (ou jusqu'à ce que nous n'ayons plus rien), nos bénévoles vous proposent des sandwiches, des croques monsieurs et des boissons à prix modique, ainsi que des patisseries en prix libre.",
        "subscribed": 0,
        "max": 0,
        "link": "https://perdu.com",
        "link_text": "Aller sur la page d'inscription",
        "show_link": false,
        "show_subscribed": false
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
