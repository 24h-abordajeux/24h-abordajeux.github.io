<script setup lang="ts">
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <div class="footer">
            <div class="socials">

            <a href="https://www.perdu.com" target="_blank"><button class="social"><FontAwesomeIcon :icon="faFacebook" size="2x" /></button></a>
            <a href="https://www.perdu.com" target="_blank"><button class="social"><FontAwesomeIcon :icon="faInstagram" size="2x"/></button></a>
            <a href="https://www.perdu.com" target="_blank"><button class="social"><FontAwesomeIcon :icon="faEnvelope" size="2x"/></button></a>
            <a href="https://www.perdu.com" target="_blank"><button class="social"><FontAwesomeIcon :icon="faGlobe" size="2x" /></button></a>
            </div>
            <div class="social">Ce site n'utilise aucun cookie et aucun traqueur :) (j'espère) (en tous cas j'en ai pas mis)</div>
        </div>
</template>

<style lang="scss" scoped>
.footer {
    display:inline-flex;
    flex-direction: column;
    margin-bottom: 1vh;
}
.sponsor {
    width: 10vh;
    object-fit: contain;
}
.social {
    background-color: transparent;
    color: #f3d31f;
}

</style>
