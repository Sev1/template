import Vue from 'vue';
import router from './router.js';
import store from './store.js';
import App from './App.vue';
Vue.config.productionTip = false;

new Vue({
  el:'#app',
  router,
  store,
  components:{
    App
  },
  template:'<App/>'
});