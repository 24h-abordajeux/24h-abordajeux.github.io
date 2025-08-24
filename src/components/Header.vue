<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useMainStore } from '../store/main.store'
import { faCircleInfo, faClipboardList, faHandshakeAngle, faHatWizard, faHouse} from '@fortawesome/free-solid-svg-icons'

const mainStore = useMainStore()
function goTo(page: string) {
    mainStore.changePage(page)
}
</script>


<template>
    <div class="header">
        <div class="my-1">
            <button @click="goTo('home')"><FontAwesomeIcon :icon="faHouse" size="2x" /></button>
            <button @click="goTo('program')"><FontAwesomeIcon :icon="faClipboardList" size="2x"/></button>
            <button @click="goTo('rpg')"><FontAwesomeIcon :icon="faHatWizard" size="2x"/></button>
            <button @click="goTo('info')" style="larger"><FontAwesomeIcon :icon="faCircleInfo" size="2x" /></button>
            <button @click="goTo('volunteer')"><FontAwesomeIcon :icon="faHandshakeAngle" size="2x"/></button>
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
