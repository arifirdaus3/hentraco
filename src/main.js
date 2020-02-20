import Vue from 'vue'
import App from './App.vue'
import router from './components/Routes'
import "normalize.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
