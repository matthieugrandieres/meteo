<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <h1>Météo<span>.alpha</span></h1>
                </div>
                <div class="col-12 col-md-8">
                    <Search />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Search from "./Search";

export default {
    name : "Header",
    components : {
        Search
    }
}
</script>

<style lang="scss">
header{
    background-color: #699CC1;
    height: 150px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 50px;
    display: flex !important;
    align-items: center;
}
header h1{
    font-family: 'Shadows Into Light';
    color: white;
}
header h1 span{
    font-size: 15px;
}

</style>