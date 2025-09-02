<script setup lang="ts">
import { faCircle, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 // <FontAwesomeIcon :icon="faClipboard" />
const extraInfo = {
    title: "Format du tournoi",
    content: [
    "Ronde suisse suivie d'un Top Cut avec les 8 meilleurs joueurs",
    "Maximum 64 joueurs",
    "Chaque participant reçoit 3 boosters PRB02 + 1 booster promo",
    "Les 8 meilleurs joueurs repartiront avec des récompenses supplémentaires !",
    ]
}
function close() {

}
</script>

<template>
    <div class="popup">
        <div class="title"><span> {{ extraInfo.title }} </span><button class="close"><FontAwesomeIcon :icon="faClose" size="xl"/></button></div>
        <div class="content" v-for="schtroumpf in extraInfo.content"><FontAwesomeIcon :icon="faCircle" size="2xs" /> {{ schtroumpf }}</div>
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
    display: grid;
    grid-template-columns: 90% 10%;
    background-color: rgba(8, 3, 133, 0.4);
    margin-bottom: 1vh;
}
.title > span {
    text-align: left;
    font-weight: 800;
    font-size: large;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1vw;
}
.content {
    text-align: left;
    margin-left: 1vw;
}
</style>
