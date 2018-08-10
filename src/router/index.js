import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/pages/dashboard/Index';
import Addschool from '@/pages/addschool/Index';
import Planning from '@/pages/planning/Index';
import Suppupload from '@/pages/suppupload/Index';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: '信息总览',
      component: Dashboard,
    },
    {
      path: '/addschool',
      name: '选择学校',
      component: Addschool
    },
    {
      path: '/planning',
      name: '申请规划',
      component: Planning
    },
    {
      path: '/suppupload',
      name: '补充文书',
      component: Suppupload
    },

  ]
});
