<script setup lang="ts">
import { defineProps } from 'vue';


defineProps({
    event: {
        type: Object,
        default: {},
    },
    index: {
        type: Number,
        default: 0,
    },
})

</script>
<template>
    <div class="event_title">{{ event.title }}</div>
        <div :class="`flexrow ${index%2 ? 'even' : 'odd'}`">
        <div class="event_description">{{ event.description }}</div>
        </div>
            <div class="" v-if="event.link">
                <a :href="event.link" target="_blank" v-if="event.show_link"><button>{{ event.link_text }}</button></a>
                <span class="gras" v-if="event.show_subscribed && event.max - event.subscribed > 0"> {{ event.max- event.subscribed }} places restantes</span> <!-- TODO: events.participants to retrieve from internet-->
                <span class="gras" v-else-if="event.show_subscribed">Complet</span> <!-- TODO: events.participants to retrieve from internet-->
                <a :href="event.poster" v-if="event.poster" target="_blank"><button>Voir l'Affiche</button></a>
                <a :href="event.prize_wall" v-if="event.prize_wall" target="_blank"><button>Voir le Prize Wall</button></a>
            </div>
</template>
<style lang="scss">

.event_title {
    font-weight: 600;
    font-size: large;
}
.event_description {
    width: 100%;
    max-height: 25vh;
    margin-bottom: 2px;
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