<template>
    <div class="days-periods">
        <div class="row">
            <div name="col-days-periods" class="col-3" v-for="item in responsePeriod" v-bind:key="item.period">
                <h4>{{period(item.period)}}</h4>
                <p class="temp-periods">{{item.temp2m}}°</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    name : "InformationsMeteoPeriods",
    computed : {
        ...mapState(['responsePeriod']),
    },
    methods :  {
         period(period) {
            const periodArray = ["Nuit", "Matin", "Après-midi", "Soir"]
            return periodArray[period]
        }
    }
}
</script>

<style lang="scss">
div.days-periods{
    padding: 20px;
}
div.days-periods [name="col-days-periods"]{
    border: solid 1px white;
}
div.days-periods [name="col-days-periods"] p.temp-periods{
    font-size: 30px;
}
div.days-periods [name="col-days-periods"] h4{
    font-size: 20px;
    min-height: 50px;
}
</style>