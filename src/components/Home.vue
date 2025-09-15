<script setup lang="ts">
import { useMainStore } from '../store/main.store';

const mainStore = useMainStore()

function goTo(page: string) {
    mainStore.changePage(page)
}

// TODO : AFFICHE LES LOGOS CONNARD !


</script>

<template>
    <div class="home">
        Mesdames, Messieurs, l'association À L'ABORDAJEUX a le plaisir de vous convier aux 24h du jeu.
        Que vous soyez des joueur·euse·s confirmé·e·s ou des novices en quête d'une activité
        pour le week end du 4 au 5 octobre, vous êtes les bienvenu·e·s parmi nous.
    </div>
    <div class="home">
        Vous trouverez ici des informations sur les activités que nous vous proposerons tout
        au long de l'événement, qu'il s'agisse de nos
        <span class="fake_link" @click="goTo('rpg')">tables de jeux de rôles</span> ou de nos
        <span class="fake_link" @click="goTo('events')">tournois et jeux plus classiques</span>,
        vous devriez trouver une table prête à lancer une partie qui vous intéresse. Les inscriptions
        sont ouvertes pour la plupart des activités.
    </div>
    <div class="home">
        Si vous souhaitez venir, vous trouverez toutes les
        <span class="fake_link" @click="goTo('info')">informations ici</span>, et si d'aventure vous aimeriez
        rejoindre l'équipage en tant que <span class="fake_link" @click="goTo('volunteer')">bénévole</span> pour
        quelques heures, sachez que vous aurez toute notre reconnaissance.
    </div>
    <div class="home">
        L'association À L'ABORDAJEUX se réjouit d'ores et déjà de vous retrouver à la cité des étudiants, à Neuchâtel.
    </div>
    <div class="title">Avec l'aimable soutien de:</div>
    <div class="sponsors">
        <a href="https://www.ornithorynque.ch" target="_blank"><img class="logo" src="/src/assets/ornithorynque.png"/></a>
        <a href="https://www.neuchatelville.ch/sortir-et-decouvrir/agenda/" target="_blank"><img class="logo" src="/src/assets/ville_neuchatel_noir.png"/></a>
        <a href="mailto:valimpressions@bluewin.ch" target="_blank"><img clss="logo" src="/src/assets/val_impression_logo.png"/></a>
        <a href="https://aumoka.ch/fr/" target="_blank"><img class="logo" src="/src/assets/au_moka_logo.png"/></a>
        <!-- spot for ludesco. Grain d'orge ? Boulangerige ? --->
    </div>
</template>

<style lang="scss" scoped>
.forceflex {
    display: flex;
        flex-direction: column;
        color: aliceblue;
        flex-grow: 1;

}
.logo {
    max-width: 10vw;
    object-fit: cover;
    margin-left: 1vw;
    margin-right: 1vw;
}
.title {
    color: aliceblue;
    text-align: center;
    font-size: large;
    font-weight: 800;
}
.home {
    color: aliceblue;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 1vh;
    text-align: justify;
}
.sponsors {

    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 1vh;
    border: ridge;
    border-color: brown;

    background-color: rgba(255,255,255,0.6);
}
.fake_link {
    color: #f3d31f;
    cursor: pointer;
}
.program {
    margin: 2vh;
    border: ridge;
    width: 60%;
    max-height: 30vh;
    border-color: brown;
    background-color: #00000080;
    &.even {

        align-self: flex-start;
        margin-left: 1vw;

    }
    &.odd {

    align-self: flex-end;
    margin-right: 1vw;
    }
    flex-direction: row;
}
</style>
