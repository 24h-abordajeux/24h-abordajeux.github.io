<script setup lang="ts">
import { faClipboard, faClock, faGem, faIdCard, faPenFancy, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useMainStore } from '../store/main.store';
import { computed, ref, watch } from 'vue';
import AdditionalInfoCard from './AdditionalInfoCard.vue';
import type { AllowedKeys } from '../utils/config';
const mainStore = useMainStore()
const popupInfo = computed(() => mainStore.tournamentExtraInfo)
const wasClickedHere = ref(false)

const {activity} = defineProps({
    activity: {
        type: Object,
        default: {},
    }
})

function showExtraInfo(identifier: string){
    mainStore.setTournamentInfo(identifier as AllowedKeys)
    wasClickedHere.value = true
}

watch(popupInfo, () => {
    wasClickedHere.value = !!popupInfo.value.title
})
</script>

<template>
        <AdditionalInfoCard v-if="wasClickedHere && popupInfo"/>

<div class="additional_informations gras">
    <div class="grid_1_x_2" v-if="activity.time_start || activity.organiser">
        <div class="box left" v-if="activity.time_start"><FontAwesomeIcon :icon="faClock" />: {{ activity.time_start }}<span v-if="activity.time_end"> - {{ activity.time_end }}</span></div>
        <div class="box" v-else></div>
        <div class="box right" v-if="activity.organiser"><FontAwesomeIcon :icon="faIdCard" />: {{activity.organiser }}</div>
        <div class="box" v-else></div>
    </div>
    <div class="grid_1_x_2" v-if="activity.show_subscribed || activity.show_link">
        <div class="box left" v-if="activity.show_subscribed"><FontAwesomeIcon :icon="faPeopleGroup" /> {{ activity.max - activity.subscribed === 0 ? ': Complet': activity.max - activity.subscribed + ' places restantes'}}</div>
        <div class="box" v-else></div>
        <div class="box right" v-if="activity.show_link"><a :href="activity.link" target="_blank"><FontAwesomeIcon :icon="faPenFancy"/> {{ activity.link_text }}</a></div>
        <div class="box" v-else></div>
    </div>
    <div class="grid_1_x_2" v-if="activity.card_game_identifier && activity.show_format || activity.show_prize">
        <div class="box left" v-if="activity.show_format" @click="showExtraInfo(`${activity.card_game_identifier}_format`)"><button><FontAwesomeIcon :icon="faClipboard"></FontAwesomeIcon> Format</button></div>
        <div class="box" v-else></div>
        <div class="box right" v-if="activity.show_prize" @click="showExtraInfo(`${activity.card_game_identifier}_prize`)"><button><FontAwesomeIcon :icon="faGem" /> Prize Pool</button></div>
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
