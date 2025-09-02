<script setup lang="ts">
import AdditionalInfo from './AdditionalInfo.vue';


defineProps({
    event: {
        type: Object,
        default: {},
    }
})

</script>
<template>

    <div class="event_title">{{ event.title }}</div>
    <div class="event_subtitle" v-if="event.game_name">Jeu: {{ event.game_name }}</div>
    <div class="event_description">{{ event.description }}</div>
    <AdditionalInfo :event="event"/>
</template>
<style lang="scss">

.event_title {
    margin-top: 2px;
    font-weight: 800;
    font-size: large;
}
.event_subtitle {
    margin-top: 2px;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: medium;
}

.event_description {

    margin-bottom: 1vh;
    overflow-y: auto;
    overflow-x: auto;
    text-align: justify;
    margin-left: 1vw;
    margin-right: 1vw;
}
.gras {
    font-weight: 600;
}
.flexrow {
    display: inline-flex;

    &.even {
        flex-direction: row;
    }
    &.odd {
        flex-direction: row-reverse;
    }
}
</style>
