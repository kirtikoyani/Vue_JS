import Vue from 'vue'
// import { createApp } from 'vue'
import App from './App.vue'
import renderComp1 from './components/renderComp1.vue'
import renderComp2 from './components/renderComp2.vue'
Vue.config.productionTip = false
// const app = createApp(App)
// app.component('comp-one', renderComp1)
Vue.component('comp-one', renderComp1);
Vue.component('comp-two', renderComp2);
// app.component('comp-two', renderComp2)
new Vue({
  render: h => h(App),
}).$mount('#app')
