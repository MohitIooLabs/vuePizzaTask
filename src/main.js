import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueEllipseProgress from 'vue-ellipse-progress';
export const bus = new Vue();

Vue.use(VueEllipseProgress);
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
