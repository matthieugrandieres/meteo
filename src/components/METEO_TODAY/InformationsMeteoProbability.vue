<template>
    <!-- Probability -->
    <div class="probability">
        <h3>Probabilités</h3>
        <!-- Row probability -->
        <div class="row">
            <div name="col-icon" class="col-4">
                <font-awesome-icon :icon="['fa', 'cloud-showers-heavy']" />
            </div>
            <div class="col-8">Pluie : {{responseHours.probarain}}%</div>
            <div name="col-icon" class="col-4">
                <font-awesome-icon :icon="['fa', 'snowflake']" />
            </div>
            <div class="col-8">Gel : {{responseHours.probafrost}}%</div>
            <div name="col-icon" class="col-4">
                <font-awesome-icon :icon="['fa', 'smog']" />
            </div>
            <div class="col-8">Brouillard : {{responseHours.probafog}}%</div>
        </div>
        <!-- /Row probability -->
    </div>
    <!-- /Probability -->
</template>

<script>
import { mapState } from "vuex";
export default {
    name : "InformationsMeteoProbabilitys",
    computed : {
        ...mapState(['responseHours'])
    }
}
</script>

<style lang="scss">
div.probability{
    padding: 20px;
    border-top: 1px solid white;
}
div.probability h3{
    padding: 20px;

}
div.probability [name=col-icon]{
    display: flex;
    justify-content: center;
}
</style>