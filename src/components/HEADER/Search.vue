<template>
    <div>
        <input v-bind:style="{border : inputError}" v-on:click="resetInput" v-on:keyup.enter="handleSearch" type="text" placeholder="Rechercher une ville.. (Ex : Lyon)" />
        <button class="btn btn-info" v-on:click="handleSearch">Valider</button>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
    name : "Search",
    computed :{ 
        ...mapState(['cityInput', 'searchActive', 'responseLocalisation']),
        ...mapGetters(['inputError']),
    },
    methods : {
        /** Import actions store */
        ...mapActions(['handleSearch']),
        /** Reset input event click */
        resetInput(){
            document.querySelector('input').value = "";
        }
    }
}
</script>

<style lang="scss">
header input{
    width: 300px;
    height: 40px;
    border-radius: 5px;
    font-size: 19px;
    padding-left: 10px;

    
}
header input:focus{
    outline:none;
}
</style>