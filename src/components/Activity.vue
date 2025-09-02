<script setup lang="ts">
import AdditionalInfo from './AdditionalInfo.vue';

defineProps({
    activity: {
        type: Object,
        default: {},
    }
})

</script>
<template>
    <div class="activity_title">{{ activity.title }}</div>
    <div class="activity_subtitle" v-if="activity.game_name">Jeu: {{ activity.game_name }}</div>
    <div class="activity_description">{{ activity.description }}</div>
    <AdditionalInfo :activity="activity"/>
</template>
<style lang="scss">

.activity_title {
    margin-top: 2px;
    font-weight: 800;
    font-size: large;
}
.activity_subtitle {
    margin-top: 2px;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: medium;
}

.activity_description {

    margin-bottom: 1vh;
    overflow-y: auto;
    overflow-x: auto;
    text-align: justify;
    margin-left: 1vw;
    margin-right: 1vw;
}
</style>
