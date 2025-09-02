<script setup lang="ts">
import { faClipboard, faClock, faGem, faIdCard, faPenFancy, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// INFO TO SHOW ?

// inscription
// timing
// organisateur
// nombre d'inscrits
// info format
// info prix

defineProps({
    event: {
        type: Object,
        default: {},
    }
})

function showFormat(evenement) {

}
function showPrize(evenement){

}
</script>

<template>
<div class="additional_informations gras">
    <div class="grid_1_x_2" v-if="event.time_start || event.organiser">
        <div class="box left" v-if="event.time_start"><FontAwesomeIcon :icon="faClock" />: {{ event.time_start }}<span v-if="event.time_end"> - {{ event.time_end }}</span></div>
        <div class="box" v-else></div>
        <div class="box right" v-if="event.organiser"><FontAwesomeIcon :icon="faIdCard" />: {{event.organiser }}</div>
        <div class="box" v-else></div>
    </div>
    <div class="grid_1_x_2" v-if="event.show_subscribed || event.show_link">
        <div class="box left" v-if="event.show_subscribed"><FontAwesomeIcon :icon="faPeopleGroup" /> {{ event.max - event.subscribed === 0 ? ': Complet': event.max - event.subscribed + ' places restantes'}}</div>
        <div class="box" v-else></div>
        <div class="box right" v-if="event.show_link"><a :href="event.link" target="_blank"><FontAwesomeIcon :icon="faPenFancy"/> {{ event.link_text }}</a></div>
        <div class="box" v-else></div>
    </div>
    <div class="grid_1_x_2" v-if="event.show_format || event.show_prizes">
        <div class="box left" v-if="event.show_format" @click="showFormat(event)"><FontAwesomeIcon :icon="faClipboard"></FontAwesomeIcon> Format</div>
        <div class="box" v-else></div>
        <div class="box right" v-if="event.show_prizes" @click="showPrize(event)"><FontAwesomeIcon :icon="faGem" /> Prize Pool</div>
        <div class="box" v-else></div>

    </div>


    </div>
</template>

<style lang="scss" scoped>

.additional_informations {
    margin-right: 1vw;
    margin-left: 1vw;
}

.grid_1_x_2{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.box {
    margin: 10px;
}
.left {
    text-align: left;
}
.right {
    text-align: left;
}
</style>
