import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'

Vue.config.productionTip = false
Vue.component('country-flag', CountryFlag)


import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'


library.add(faStar)
library.add(farStar)

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  render: h => h(App),
}).$mount('#app')
