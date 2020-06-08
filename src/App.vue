<template>
  <div id="app">

    <!-- Component Header -->
    <Header />
    <!-- /Component Header -->

    <div class="container">
      <div class="row">

        <!-- ** LEFT COL **-->
        <div class="col-12 col-md-8">
            <!-- Component MeteoToday -->
            <MeteoToday />
            <!-- Component MeteoToday -->
        </div>
        <!-- ** /LEFT COL **-->

        <!-- ** RIGHT COL ** -->
        <div class="col-12 col-md-4">
          <Favorites />
          <NextDays />
        </div> 
        <!-- ** /RIGHT COL ** -->
      </div>
    </div>

    <!-- Footer -->
    <footer>
        <div>Source API : <a target="_blank" href="https://api.meteo-concept.com/">https://api.meteo-concept.com/</a></div>
        <div><a target="_blank" href="https://www.linkedin.com/in/matthieu-grandieres-ab791916b/">Matthieu GRANDIERES</a></div>
    </footer>
    <!-- /Footer -->

  </div>
</template>

<script>
import Header from "./components/HEADER/Header";
import MeteoToday from "./components/METEO_TODAY/MeteoToday";
import Favorites from "./components/FAVORITES/Favorites";
import NextDays from "./components/NEXT_DAYS/NextDays";

import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: 'App',
  components: {
    Header,
    MeteoToday,
    Favorites,
    NextDays,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

body{
    background-color: #E9EBEE;
    font-family: 'Abel';
}
h2{
    text-align: center;
}
p{
    text-align: center;
}
img{
    margin: auto;
    display: block;
}
h3{
    text-align: center;
}
h4{ 
    text-align: center;
}
footer{
    margin-top: 100px;
    height: 50px;
    background-color: #4D4D4D;
    color: white;  
    text-align: center  
}
footer a{
    color: white;
}
footer a:hover{
    text-decoration: none;
}

</style>
