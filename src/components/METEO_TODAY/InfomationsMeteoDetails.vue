<template>
    <!-- Détails météo -->
    <div class="details-meteo">
        <div class="row">
            <div class="col-4">
                <img src="img/téléchargement.png" height="40px">
            </div>
            <div class="col-8">Lever du soleil : {{responseEphemeride.sunrise}}</div>
        </div>
        <div class="row">
            <div class="col-4">
                <img src="img/téléchargement (1).png" height="40px">
            </div>
            <div class="col-8">Coucher du soleil : {{responseEphemeride.sunset}}</div>
        </div>
        <div class="row">
            <div class="col-4">
                <img src="img/téléchargement (3).png" height="40px">
            </div>
            <div class="col-8">Vent : {{responseHours.wind10m}}km/h</div>
        </div>
        <div class="row">
            <div class="col-4">
                <font-awesome-icon :icon="['fa', 'moon']" />
            </div>
            <div class="col-8">Phase de la lune : {{responseEphemeride.moonPhase}} </div>
        </div>
    </div>
    <!-- /Détails météo -->
</template>

<script>
import {mapState} from 'vuex';
export default {
    name : "InformationsMeteoDetails",
    computed : {
        ...mapState(['responseHours', 'responseEphemeride'])
    }
}
</script>

<style lang="scss">
div.details-meteo{
    padding: 20px;
}
div.details-meteo{
    svg{
        margin: auto;
        display: block;
        font-size: 25px;
    }
}
</style>