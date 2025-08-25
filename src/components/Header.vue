<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useMainStore } from '../store/main.store'
import { faCircleInfo, faClipboardList, faHandshakeAngle, faHatWizard, faHouse, faSpinner} from '@fortawesome/free-solid-svg-icons'
import { computed } from 'vue'

const mainStore = useMainStore()
const isLoading = computed(() => mainStore.isLoading)
function goTo(page: string) {
    mainStore.changePage(page)

}
</script>


<template>
    <div class="header">
        <div class="my-1">
            <button @click="goTo('home')"><FontAwesomeIcon :icon="faHouse" size="2x" v-if="!isLoading"/><FontAwesomeIcon
                :icon="faSpinner"
                size="2x"
                pulse
                v-else
            /></button>
            <button @click="goTo('events')"><FontAwesomeIcon :icon="faClipboardList" size="2x"v-if="!isLoading"/><FontAwesomeIcon
                :icon="faSpinner"
                size="2x"
                pulse
                v-else
            /></button>
            <button @click="goTo('rpg')"><FontAwesomeIcon :icon="faHatWizard" size="2x"v-if="!isLoading"/><FontAwesomeIcon
                :icon="faSpinner"
                size="2x"
                pulse
                v-else
            /></button>
            <button @click="goTo('info')" style="larger"><FontAwesomeIcon :icon="faCircleInfo" size="2x" v-if="!isLoading"/><FontAwesomeIcon
                :icon="faSpinner"
                size="2x"
                pulse
                v-else
            /></button>
            <button @click="goTo('volunteer')"><FontAwesomeIcon :icon="faHandshakeAngle" size="2x"v-if="!isLoading"/><FontAwesomeIcon
                :icon="faSpinner"
                size="2x"
                pulse
                v-else
            /></button>
        </div>   
    </div>
</template>

<style lang="scss" scoped>
.header {
    opacity: 50%;
    width:100%;
    top:0;
}
.my-1 {
    margin-top: 2px;
    margin-bottom: 2px;
}
.larger {
    font-size: 10rem;
}
</style>
