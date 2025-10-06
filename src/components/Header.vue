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

function buttonSize() {
    return window.screen.width < 600 || window.screen.height < 600 ? "1x": "2x"
}

</script>


<template>
    <div class="header">
        <div class="my-1">
            <button @click="goTo('home')"  v-if="false" ><FontAwesomeIcon :icon="faHouse" :size="buttonSize()"/></button>
            <button @click="goTo('events')" v-if="false"><FontAwesomeIcon :icon="faClipboardList" :size="buttonSize()"v-if="!isLoading"/><FontAwesomeIcon
                :icon="faSpinner"
                :size="buttonSize()"
                pulse
                v-else
            /></button>
            <button @click="goTo('rpg')" v-if="false"><FontAwesomeIcon :icon="faHatWizard" :size="buttonSize()"v-if="!isLoading"/><FontAwesomeIcon
                :icon="faSpinner"
                :size="buttonSize()"
                pulse
                v-else
            /></button>
            <button @click="goTo('info')" v-if="false" style="larger"><FontAwesomeIcon :icon="faCircleInfo" :size="buttonSize()"/></button>
            <button @click="goTo('volunteer')" v-if="false"><FontAwesomeIcon :icon="faHandshakeAngle" :size="buttonSize()"/></button>
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
