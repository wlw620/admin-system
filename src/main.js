import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App';
import router from './router';
import i18n from './i18n';
import store from './store'

Vue.config.productionTip = false;
Vue.use(iView);

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {
    App
  },
  template: '<App/>'
});
