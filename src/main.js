import Vue from 'vue';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import App from './App';
import router from './router';
import i18n from './i18n';

Vue.config.productionTip = false;
Vue.use(iView);

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
});
