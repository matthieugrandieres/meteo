import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)


export default new Vuex.Store({
  state: {
    /** => Request 1 (LOCALISATION) */
    cityInput : null,
    requestGet : 'https://api.meteo-concept.com/api/location/cities?token=',
    token : '3aa488426ff09687a1e7df0c2ab39ed99b6f290a2f2de4c6f97d3c618f0291b9',
    responseLocalisation : [],
    searchActive : false,
    codeInsee : null,
    /*****************/
    /** => Request 2 (HOURS) */
    requestHours : 'https://api.meteo-concept.com/api/forecast/nextHours?token=',
    responseHours : {temp2m : null, name : null, date : null, hour: null, probafog : null, probafrost : null, probarain : null, weather : null, wind10m : null},
    /************************/
    /** => Request 3 (EPHEMERIDE) */
    requestEphemeride : 'https://api.meteo-concept.com/api/ephemeride/0?token=',
    responseEphemeride : {sunrise : null, sunset : null, moonPhase : null},
    /***********************/
    /** => Request 4 (PERIOD) */
    requestPeriod : 'https://api.meteo-concept.com/api/forecast/daily/0/periods?token=',
    responsePeriod : [],
    /*************************/
    /** => Request 5 (DAY) */
    requestDays : 'https://api.meteo-concept.com/api/forecast/daily?token=',
    responseDays : [],
    /*************************/
    /** => FAVORITES *********/
    favorites : []
    /*************************/
  },
  getters : {
    /** Return condition input border color */
    inputError(state) {
      if (state.searchActive) {
        if (state.responseLocalisation.length > 0) {
          return '2px solid green';
        } else {
          return '2px solid red';
        }
      }
    },
    requestLocalisation(state){
      /** Return request localisation */
      return state.requestGet +  '' + state.token + '&search=' + state.cityInput;
    },
  },
  mutations: { 
    SETCITY(state){
      let el = document.querySelector('input').value;
      state.cityInput = el;
    },

    SETFAVORITE(state){
      let el = document.querySelector('li').innerHTML;
      state.cityInput = el;
    },

    SETRESPONSELOCALISATION(state, response) {
      state.searchActive = true;
      state.responseLocalisation = response;
    },

    SETCODEINSEE(state, response) {
      state.codeInsee = response;
      state.activeRequestHours = true;
    },

    SETINFORMATIONSHOURS(state, temp2m, name) {
      state.responseHours.temp2m = temp2m;
      state.responseHours.name = name;
    
    },
    SETTEMP2M(state, response) {
      state.temp2m = response;
    }, 

    REQUESTHOURS(state) {
      const RequestGetHours = state.requestHours + '' + state.token + '&insee=' + state.codeInsee;
      axios
      .get(RequestGetHours)
        .then(response => {
          /** 1 - Current temperature */
          state.responseHours.temp2m = response.data.forecast[0].temp2m;
          /** 2 - City */
          state.responseHours.name = response.data.city.name;
          /** 3 - Probability rain */
          state.responseHours.probarain = response.data.forecast[0].probarain;
          /** 4 - Probability fog */
          state.responseHours.probafog = response.data.forecast[0].probafog;
          /** 5 - Probability frog */
          state.responseHours.probafrost = response.data.forecast[0].probafrost;
          /** 6 - Weatcher */
          state.responseHours.weather = response.data.forecast[0].weather;
          /** 7 - wind10m */
          state.responseHours.wind10m = response.data.forecast[0].wind10m;
          /** 8 - Date & hour*/
          let date = response.data.forecast[0].datetime;
          let day = date.substr(8, 2);
          let month = date.substr(5, 2);
          let year = date.substr(0, 4);
          state.responseHours.date = day + '/' + month + '/' + year; 
          state.responseHours.hour = date.substr(11, 2);
        }) 
    },

    REQUESTEPHEMERIDE(state){
      const requestEphemeride = state.requestEphemeride + '' + state.token + '&insee=' + state.codeInsee;
      axios 
        .get(requestEphemeride)
          .then(response => {
            /** 1 - Sunrise */
            state.responseEphemeride.sunrise = response.data.ephemeride.sunrise;
            /** 2 - Sunset */
            state.responseEphemeride.sunset = response.data.ephemeride.sunset;
            /** 3 - Moon phase */
            state.responseEphemeride.moonPhase = response.data.ephemeride.moon_phase;
          })
    },

    REQUESTPERIOD(state){
      const requestPeriod = state.requestPeriod + '' + state.token + '&insee=' + state.codeInsee;
      axios 
        .get(requestPeriod)
          .then(response => {
            state.responsePeriod = response.data.forecast;
          })
    },
    
    REQUESTDAYS(state) {
      const requestDays = state.requestDays + '' + state.token + '&insee=' + state.codeInsee;
      axios 
        .get(requestDays)
          .then(response => {
            for (let num = 1; num < 14; num ++) {
              state.responseDays.push(response.data.forecast[num]);
            }   
          })
    },
    RESETDAYS(state) {
      state.responseDays = [];
    }, 

    FAVORITESCLICK(state, playload) {
      let citySelect = document.getElementById('city').innerHTML;
      if (state.favorites.indexOf(citySelect) === -1 ) {
          state.favorites.push(playload);
      } else {
          state.favorites.splice(state.favorites.indexOf(citySelect), 1)
      }
    }
  },
  actions: {
    /** EVENT SEARCH */
    handleSearch({commit, getters}) {
      commit('RESETDAYS')
      commit('SETCITY');
      const requestLocalisation = getters.requestLocalisation;
      axios
        .get(requestLocalisation)
          .then(response => {
            commit('SETRESPONSELOCALISATION', response.data.cities)
            commit('SETCODEINSEE', response.data.cities[0].insee)
            /** Request */
            commit('REQUESTHOURS')
            commit('REQUESTEPHEMERIDE')
            commit('REQUESTPERIOD')
            commit('REQUESTDAYS')
          })
        
      /**/
    },
    /** EVENT FAVORITES */
    handleFavorites({commit, getters}) {
      commit('RESETDAYS')
      commit('SETFAVORITE');
      const requestLocalisation = getters.requestLocalisation;
      axios
        .get(requestLocalisation)
          .then(response => {
            commit('SETRESPONSELOCALISATION', response.data.cities)
            commit('SETCODEINSEE', response.data.cities[0].insee)
            /** Request */
            commit('REQUESTHOURS')
            commit('REQUESTEPHEMERIDE')
            commit('REQUESTPERIOD')
            commit('REQUESTDAYS')
          })
    },
  },
  modules: {
  }
})
