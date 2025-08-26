<script setup lang="ts">
import { computed } from 'vue';
import { useMainStore } from '../store/main.store';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const mainStore = useMainStore()
const hasVolunteered = computed(() => mainStore.volunteer)
function becomeVolunteer() {
    mainStore.becomeVolunteer()
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc6PLMue4VWflzc2dVPrb9bSnR4rwahI3-qOhHN7-cHXE6GiQ/viewform?usp=dialog', '_blank')
}
</script>

<template>
    <div class="home">
        Les 24h du jeu ne pourront pas tourner sans un équipage nombreux et motivé.
        Nous serions heureux de vous compter parmi nous. Si d'aventure vous souhaiteriez contribuer,
        vous pouvez nous donner vos disponibilités, et vous profiterez alors également des coulisses de l'événement. :)
    </div>
    <button v-if="!hasVolunteered" @click="becomeVolunteer()">Devenir bénévole</button>
    <div v-else class="volunteer">Merci beaucoup de votre soutien :)</div>
    <div class="home">
        Si vous avez des questions concernant le travail de bénévole, ou que vous êtes déjà bénévole et que vous
        avez besoin de nous contacter, vous pouvez le faire ici.
    </div>
    <a href="mailto:24hdesbenevoles@pm.me" ><button class="social"><FontAwesomeIcon :icon="faEnvelope" size="2x"/></button></a>
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
    margin-bottom: 1vh;
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
