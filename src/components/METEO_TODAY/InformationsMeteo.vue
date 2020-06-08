<template>
    <div>
        <h2><span id="city">{{responseHours.name}}</span><span class="favorites">
            <font-awesome-icon :icon="['fa', 'star']" v-on:click="handleClickFav(responseHours.name)" 
            v-if="this.$store.state.favorites.indexOf(responseHours.name) > -1" v-bind:style="{color : '#FF6161'}"/>
            <font-awesome-icon :icon="['fa', 'star']" v-on:click="handleClickFav(responseHours.name)" 
            v-else v-bind:style="{color : 'white'}"/>
            
            </span>
        </h2> 
        <div class="info-meteo">
            <p class="date">{{responseHours.date}} | prévision pour : {{responseHours.hour}}h00</p>     
            <p class="temp">{{responseHours.temp2m}}°</p> 
            <p class="statut">{{weatcher}}</p>
        </div>
    </div>
</template>

<script>
import codeTemp from '../../annexes/codeTemp';
import { mapState } from 'vuex';

export default {
    name : "InformationsMeteo",
    data : function(){
        return {
            favorites : [],
        }
    },
    computed : {
        ...mapState(['responseHours']),
        weatcher(){
            return codeTemp.name[this.$store.state.responseHours.weather]
        },
    },
    methods :  {
        handleClickFav(playload) {
            this.$store.commit('FAVORITESCLICK', playload)
        }
    },
    components : codeTemp,
}
</script>

<style lang="scss">
div.meteo-today h2{
    border-bottom: solid 1px white;
    padding: 20px ;
}
div.meteo-today h2 span.favorites{
    float: right;
    cursor: pointer;
}

div.meteo-today div.info-meteo{
    padding: 20px;
}

div.meteo-today p.date{
    font-size: 18px;
}

div.meteo-today p.temp{
    font-size: 52px;
}

div.meteo-today p.statut{
    font-size: 20px;
}
</style>
