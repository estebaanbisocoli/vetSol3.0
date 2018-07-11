import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapVue from 'bootstrap-vue';
import 'animate.css/animate.min.css';
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  render: h => h(App)
}).$mount('#app');
