import Vue from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

Vue.config.productionTip = false
Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);
Vue.component('base-dialog', BaseDialog);
new Vue({
  render: h => h(App),
}).$mount('#app')
