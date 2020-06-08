<template>
    <div class="next-days" v-if="this.$store.state.searchActive && this.$store.state.responseLocalisation.length > 0">
        <ul>
            <li v-for="item in responseDays" v-bind:key="item.day">
                <div class="row" v-on:click="clickNextDaysDetails(item.day)">
                    <div class="col-3">{{dateFormat(item.datetime)}}</div>
                    <div v-if="nextDaysDetails[item.day]" class="col-9">min : {{item.tmin}}° | max : {{item.tmax}}° <font-awesome-icon :icon="['fa', 'arrow-alt-circle-up']" /></div>
                    <div v-else class="col-9">min : {{item.tmin}}° | max : {{item.tmax}}° <font-awesome-icon :icon="['fa', 'arrow-alt-circle-down']" /></div>
                </div>

                <div v-if="nextDaysDetails[item.day]" class="next-days-details">
                    <div class="row">
                        <div class="col-12">
                            {{codeTemp(item.weather)}}
                        </div>   
                        <div class="col-6">
                            <img src="img/téléchargement (3).png" width="30px" alt="">
                            <p>{{item.wind10m}} km/h</p>
                        </div>
                        <div class="col-6">
                            <font-awesome-icon :icon="['fa', 'cloud-showers-heavy']" />
                            <p>{{item.probarain}}%</p>
                        </div>
                        <div class="col-6">
                            <font-awesome-icon :icon="['fa', 'snowflake']" />
                            <p>{{item.probafrost}}%</p>
                        </div>
                        <div class="col-6">
                            <font-awesome-icon :icon="['fa', 'smog']" />
                            <p>{{item.probafog}}%</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>

    <div class="next-days-none" v-else></div>
</template>

<script>
import {mapState} from "vuex";
import codeTemp from "../../annexes/codeTemp";
export default {
    name : "NextDays",
    data : function() {
        return {
            nextDaysDetails : {1 : false, 2 : false, 3 : false, 4 : false, 5 : false, 6 : false, 7 : false, 8 : false, 9 : false,
            10 : false, 11 : false, 12 : false, 13 : false, 14 : false},
        }
    },
    computed : {
        ...mapState(['responseDays']),
    },
    methods : {
        dateFormat(date) {
            let jour = date.substr(8, 2);
            let mois = date.substr(5, 2);
            let annee = date.substr(0, 4);
            let dateComputed = jour + '/' + mois + '/' + annee;
            return dateComputed;
        },
        clickNextDaysDetails(index){
            if (this.nextDaysDetails[index] === false){
                this.nextDaysDetails[index] = true;
            } else {
                this.nextDaysDetails[index] = false;
            }
        },
        codeTemp(num){
            return codeTemp.name[num];
        }
    },
}
</script>

<style lang="scss">
div.next-days {
    height: 475px;
    overflow: scroll;
}
div.next-days ul{
    padding-left: 0;
}
div.next-days li{
    background-color: #7CBBC4;
    list-style-type: none;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
div.next-days li:hover{
    background-color: #96b4e4;
}
div.next-days svg.fa-arrow-alt-circle-up, .fa-arrow-alt-circle-down{
    cursor: pointer;
}
/** details **/
div.next-days div.next-days-details {
    margin-top: 20px;
    color: white;
}
div.next-days div.next-days-details [name="col-next-days-details"]{
    border: solid 1px #E9EBEE;
    
}
div.next-days div.next-days-details h6{
    min-height: 50px;
}
div.next-days div.next-days-details .fa-cloud-showers-heavy, .fa-snowflake, .fa-smog{
    color: white;
}

div.next-days-none{
    background-color: white;
    height: 490px;
}
</style>