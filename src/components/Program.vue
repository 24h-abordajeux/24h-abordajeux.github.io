<script setup lang="ts">
import { computed, onMounted } from "vue";
import Event from "./Event.vue";
import { useMainStore } from "../store/main.store";

const mainStore = useMainStore()
const events = computed(() => mainStore.events)
onMounted(() => {
    mainStore.getEvents()
})

</script>

<template>
    <div class="forceflex" :style="`height: ${(events.length - 1 * 30)}vh;`">

    <div v-for="(event,index) in events" :class="`program ${index%2 ? 'even' : 'odd'}`">
        <Event :event="event" :index="index"></Event> 
        
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
    overflow-y: auto;
}
</style>
