<template>
    <div v-if="this.$store.state.searchActive && this.$store.state.responseLocalisation.length > 0" class="favoris">
        <h2>FAVORIS <span><font-awesome-icon :icon="['fa', 'star']" /></span></h2>
        <ul>
            <li v-on:click="handleFavorites" v-for="city in favorites" v-bind:key="city">{{city.toUpperCase()}}</li>
        </ul>
    </div>

    <div v-else class="favoris-none"></div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
    name : "Favorites",
    computed : {
        ...mapState(['favorites'])
    },
    methods : {
        ...mapActions(['handleFavorites'])
    },
}
</script>

<style lang="scss">
div.favoris{
    margin-top: 50px;
    background-color: white;
    border-radius: 5px;
   
}
div.favoris h2{
    color:#FF6161;
    border-bottom: solid 1px #FF6161;
    padding: 20px;
    font-size: 25px;
}
div.favoris ul{
    height: 280px;
    overflow:scroll;
    padding-left: 0;
}
div.favoris li {
    list-style-type: none;
    padding: 20px;
    color: #4D4D4D;
    border-bottom: solid 1px #4D4D4D;
    font-size: 20px;
    text-align: center;
}
div.favoris li:hover {
    background-color: #FF6161;
    color: white;
    cursor: pointer;
}
div.favoris-none{
    background-color: white;
    height: 353px;
    margin-top: 50px;
    margin-bottom : 20px;
}
</style>