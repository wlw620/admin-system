import Vue from 'vue';
import Router from 'vue-router';

//学生端
import mentee from './mentee';


Vue.use(Router);


let routerArray = [];
routerArray = routerArray.concat(mentee);

export default new Router({
  routes: routerArray
});
