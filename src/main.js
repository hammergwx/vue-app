import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Swiper from "swiper";
import "swiper"
import Item from "./components/Item"
import CarItem from "./components/CarItem"
import Head from "./components/Head"

Vue.config.productionTip = false
Vue.component("Item", Item)
Vue.component("CarItem", CarItem)
Vue.component("Head", Head)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
