<script setup lang="ts">
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

function buttonSize() {
    return window.screen.width < 600 || window.screen.height < 600 ? "1x": "2x"
}
</script>

<template>
    <div class="footer">
            <div class="socials">

            <a href="https://www.facebook.com/people/A-LABORDAJEUX/61553334539310/" target="_blank"><button class="social"><FontAwesomeIcon :icon="faFacebook" :size="buttonSize()" /></button></a>
            <a href="https://www.instagram.com/alabordajeux/" target="_blank"><button class="social"><FontAwesomeIcon :icon="faInstagram" :size="buttonSize()"/></button></a>
            <a href="mailto:association.alabordajeux@gmail.com?subject='24h du Jeu'" target="_blank"><button class="social"><FontAwesomeIcon :icon="faEnvelope" :size="buttonSize()"/></button></a>
            <a href="https://abordajeux.ch" target="_blank"><button class="social"><FontAwesomeIcon :icon="faGlobe" :size="buttonSize()" /></button></a>
            </div>
            <div class="social">Ce site n'utilise aucun cookie et aucun traqueur :)</div>
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
