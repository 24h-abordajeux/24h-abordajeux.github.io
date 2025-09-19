<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, type Ref } from "vue";
import Activity from "./Activity.vue";
import { useMainStore } from "../store/main.store";
import { placeHolderActivity } from "../utils/config";

const mainStore = useMainStore()
const activities = computed(() => mainStore.getActivities()?.filter((activity) => activity?.show_event))
const isLoading = computed(() => mainStore.isLoading)
const currentPage = computed(() => mainStore.page)
const interval: Ref<NodeJS.Timeout | undefined> = ref(undefined)

onMounted(() =>  interval.value = setInterval(mainStore.refreshactivities, 30000, currentPage.value)
)
onUnmounted(() => clearInterval(interval.value))

</script>

<template>
    <div>
        <div v-if="isLoading" class="program font-alice-blue ">
            <Activity :activity="placeHolderActivity"/>
        </div>
        <div v-else class="forceflex" :style="`height: ${(activities.length - 1 * 30)}vh;`">
            <div v-for="(activity,index) in activities" :class="`program ${index%2 ? 'even' : 'odd'}`">
                <Activity :activity="activity" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.font-alice-blue {
    color: aliceblue;
}
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
