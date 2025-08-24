<script setup lang="ts">
import { computed } from 'vue';
import { useMainStore } from '../store/main.store';

const mainStore = useMainStore()
const hasVolunteered = computed(() => mainStore.volunteer)
function becomeVolunteer() {
    mainStore.becomeVolunteer()
    // TODO : link to volunteer form
}
</script>

<template>
    <div class="home">
        Les 24h du jeu ne pourront pas tourner sans un équipage nombreux et motivé.
        Nous serions heureux de vous compter parmis nous. Si d'aventure vous souhaiteriez contribuer,
        vous pouvez nous écrire vos disponibilités, et vous profiterez alors de l'événement des deux côtés :)
    </div>
    <button v-if="!hasVolunteered" @click="becomeVolunteer()">Devenir bénévole</button>
    <div v-else class="volunteer">Merci beaucoup de votre soutien :)</div>
</template>

<style lang="scss" scoped>
.forceflex {
    display: flex;
        flex-direction: column;
        color: aliceblue;
        flex-grow: 1;

}
.volunteer {
    margin-top: 1vh;
    color: aliceblue;
    font-weight: 600;
}
.home {
    color: aliceblue;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 1vh;
    text-align: justify;
}
.fake_link {
    color: #f3d31f;
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
