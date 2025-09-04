<script setup lang="ts">
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

</script>

<template>
    <div class="informations">
        <div class="textual-informations">
            <div class="subtitle">Informations pratiques</div>
            <ul class="bullet-styles">
                <li>
                    Cité des étudiants, Avenue Clos Brochet 10, 2000 Neuchâtel
                </li>
                <li>
                    Début à 10h du matin le samedi 4 octobre 2025
                </li>
                <li>
                    Fin à 10h du matin le dimanche 5 octobre 2025
                </li>
            </ul>
            <div class="subtitle">Prix d'entrée</div>
            <ul class="bullet-styles">
                <li>
                    <FontAwesomeIcon :icon="faTriangleExclamation" /> L'événement est cashless.
                </li>
                <li>
                    <span class="gras">Adultes: </span><span class="right-align mg-r-2">15 CHF par personne</span> 
                </li>
                <li>
                    <span class="gras">AI / AVS / Chômeurs / Etudiants: </span><span class="right-align mg-r-2">10 CHF par personne</span>
                </li>
                <li>
                    <span class="gras">Enfants entre 8 et 16 ans / membres de À L'ABORDAJEUX: </span><span class="right-align mg-r-2">8 CHF par personne</span>
                </li>
                <li>
                    <span class="gras">Enfants plus jeunes:</span><span class="right-align mg-r-2"> Gratuit</span>
                </li>
                <li class="gras mg-r-2">Les mineurs restent sous la responsabilité de leurs parents pendant l'ensemble de l'événement.</li>
            </ul>
             <div class="subtitle">Manger et Boire pendant l'événement</div>
            <div class="left-align mg-l-2">
                Des sandwiches, des croque-monsieur et un bar seront à votre disposition pendant tout l'événement pour une somme modique.
            </div>
            <div class="left-align mg-l-2">
                Des pâtisseries seront en vente à prix libre jusqu'à ce que vous ayez tout mangé.
            </div>
        </div>
       
        <div class="map">
            <div class="subtitle">Plan d'accès</div>
            <iframe src="https://map.geo.admin.ch/#/embed?lang=en&noSimpleZoom&center=2562240.15,1205173.32&z=11&topic=ech&layers=KML%7Chttps://public.geo.admin.ch/api/kml/files/zteA8GfWSGK7WpSNa4k8ng&bgLayer=ch.swisstopo.pixelkarte-grau&featureInfo=default" style="border: 0;width: 90%;height: 70vh;max-width: 90%;max-height: 70vh;" allow="geolocation"></iframe>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.gras {
    font-weight: 800;
}
.left-align {
    text-align: left;
}
.mg-l-2 {
    margin-left: 2vw;
}
.right-align {
    text-align: right;
}
.mg-r-2 {
    margin-right: 2vw;
}
.informations {
    color: white;
    width:100%;

}
.textual-informations {
    height: fit-content;
}
.contact-informations {
    height: fit-content;
}
.map {
    width: 90%;
    margin-top: 5vh;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4vh;
    overflow: hidden;
}
.bullet-styles {
        list-style-type: none;
        text-align: left;
        margin-left: auto;
        margin-right: auto;

}
.subtitle {
    margin: 2px;
    font-weight: 600;
    font-size: large;
}
</style>
