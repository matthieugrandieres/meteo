import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudShowersHeavy, faStar, faSmog , faSnowflake, faArrowAltCircleUp, faArrowAltCircleDown, faMoon} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false
library.add(faStar, faCloudShowersHeavy, faSmog, faSnowflake, faArrowAltCircleUp, faArrowAltCircleDown, faMoon)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
