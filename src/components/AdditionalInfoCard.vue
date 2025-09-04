<script setup lang="ts">
import { faCircle, faClose, faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useMainStore } from '../store/main.store';
import { computed } from 'vue';

const mainStore = useMainStore()
const infoDisplayed = computed(() => mainStore.tournamentExtraInfo)

function close() {
    mainStore.setTournamentInfo(null)
}
</script>

<template>
    <div class="popup">
        <div class="title"><div class="internal"> {{ infoDisplayed?.title }} </div><div><button class="close" @click="close()"><FontAwesomeIcon :icon="faClose" size="xl"/></button></div></div>
        <div class="content" v-for="value in infoDisplayed?.content"><FontAwesomeIcon :icon="faCircle" size="2xs" /> {{ value }}</div>
        <div class="content prizes" v-for="prize, key in infoDisplayed?.prizes">
            <div class="gras"><FontAwesomeIcon :icon="faGem" size="xs" /><span>{{ key }}</span></div>
            <div v-for="value in prize" class="prizepool"> {{ value }}</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000000;
    border: 2px solid brown;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    color: white;
    min-width: 30vw;
    max-width: 70vw;
}
.title {
    display: flex;
    flex-flow: row;
    width: 100%;
    background-color: rgba(8, 3, 133, 0.4);
    margin-bottom: 1vh;
}
.gras > span {
    margin-left: 0.5vw;
    font-weight: 600;
}
.internal{
    text-align: left;
    font-weight: 800;
    font-size: large;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1vw;
    flex-grow: 5;
}
.content {
    text-align: left;
    margin-left: 1vw;
    margin-bottom: 1vh;
        margin-right: 1vw;

}
.content > button {
    margin-right: 1vw;
}
.gras {
    margin-left: 1vw;
}
.prizepool {
    margin-left: 3vw;
}
</style>
