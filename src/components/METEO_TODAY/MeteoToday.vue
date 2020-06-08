<template>
    <!-- Météo today -->
    <div v-if="this.$store.state.searchActive && this.$store.state.responseLocalisation.length > 0" class="meteo-today">

        <!-- Informations meteo -->
        <InformationMeteo />
        <!-- /Informations meteo -->

        <!-- Informations meteo period -->
        <InformationMeteoPeriod />
        <!-- /Informations meteo period -->

        <!-- Informations meteo details -->
        <InformationMeteoDetails />
        <!-- /Informations meteo details -->

        <!-- Informations meteo probability -->
        <InformationMeteoProbability />
        <!-- /Informations meteo probability -->
    
    </div>

    <div v-else class="meteo-today-none">
     
    </div>
    <!-- /Météo today -->
</template>

<script>
import InformationMeteo from "./InformationsMeteo";
import InformationMeteoPeriod from "./InformationsMeteoPeriods";
import InformationMeteoDetails from "./InfomationsMeteoDetails";
import InformationMeteoProbability from "./InformationsMeteoProbability";

export default {
    name : "MeteoToday",
    components : {
        InformationMeteo,
        InformationMeteoPeriod,
        InformationMeteoDetails,
        InformationMeteoProbability
    }
}
</script>

<style lang="scss">
div.meteo-today{
    margin-top: 50px;
    background-color: #96B4E4;
    color: white;
    border-radius: 5px;
}

div.meteo-today-none{
    background-color: white;
    height: 866px;
    margin-top: 50px;
    border-radius: 5px;
}
</style>