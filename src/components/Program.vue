<script setup lang="ts">
import { computed } from "vue";
import Event from "./Event.vue";
import { useMainStore } from "../store/main.store";

const mainStore = useMainStore()
const events = computed(() => mainStore.getEvents().filter((event) => event.show_event))

</script>

<template>
    <div class="forceflex" :style="`height: ${(events.length - 1 * 30)}vh;`">

    <div v-for="(event,index) in events" :class="`program ${index%2 ? 'even' : 'odd'}`">
        <Event :event="event" />

    </div>
    </div>
</template>

<style lang="scss" scoped>
.forceflex {
    display: flex;
        flex-direction: column;
        color: aliceblue;
        flex-grow: 1;

}
@media only screen and (max-width:600px) {
    .program {
        width: 90%;
    }
}

@media only screen and (min-width:600px) {
    .program {
        width: 60%;
    }
}

.program {
    margin: 2vh;
    border: ridge;
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
    overflow-y: auto;
}
</style>
