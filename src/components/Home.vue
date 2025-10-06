<script setup lang="ts">

</script>

<template>
    <div class="title">
        MERCI À TOUS
    </div>
    <div class="home">
        Les 24h du jeu se sont terminés, et nous sommes heureux d'avoir pu vous accueillir. Il ne nous reste que deux petites choses à vous demander.
    </div>
    <div class="title">
        Donnez votre avis
    </div>
    <div class="home">
        Nous avons fait de notre mieux, mais nous sommes certains que nous pouvons faire mieux. Aussi, nous vous invitons à laisser un avis (et vos remarques)
        sur l'organisation et le déroulement de l'événement.
    </div>
    <div class="title"><button> <a href="https://forms.gle/Acyo2XKSGPVqrzp28" target="_blank">Donnez votre Avis</a></button></div>
    <div class="title">
        Avez vous perdu quelque chose ?
    </div>
    <div class="home">
        Si vous avez perdu un objet durant les 24h, n'hésitez pas à nous <a href="mailto:association.alabordajeux@gmail.com?subject='Objet perdu lors des 24h du jeu'" target="_blank">contacter</a>
.
    </div>
</template>

<style lang="scss" scoped>
.forceflex {
    display: flex;
        flex-direction: column;
        color: aliceblue;
        flex-grow: 1;

}
.logo {
    max-height: 256px;
    max-width: 256px;
    object-fit: cover;
    margin-left: 1vw;
    margin-right: 1vw;
}
.title {
    color: aliceblue;
    text-align: center;
    font-size: large;
    font-weight: 800;
}
.home {
    color: aliceblue;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 1vh;
    text-align: justify;
}
.sponsors {

    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 2vh;
    padding-top: 1vh;
    padding-bottom: 1vh;
    border: ridge;
    border-color: brown;
    background-color: rgba(255,255,255,0.6);
}
.fake_link {
    color: #f3d31f;
    cursor: pointer;
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
}
</style>
