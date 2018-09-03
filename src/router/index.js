import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/pages/dashboard/Index';
import Dashboard2 from '@/pages/dashboard2/Index';
import Addschool from '@/pages/addschool/Index';
import Extracurricular from '@/pages/extracurricular/Index';

import Planning from '@/pages/planning/Index';
import Psupload from '@/pages/psupload/Index';
import Addtopics from '@/pages/addtopics/Index';
import Suppupload from '@/pages/suppupload/Index';
import Otherupload from '@/pages/otherupload/Index';
import Booklets from '@/pages/booklets/Index';
import Resources from '@/pages/resources/Index';
import Application from '@/pages/application/Index';
import Prize from '@/pages/prize/Index';
import Questionnaire from '@/pages/questionnaire/Index';
import Question0 from '@/pages/questionnaire/Question0';
import Question1 from '@/pages/questionnaire/Question1';
import Question2 from '@/pages/questionnaire/Question2';
import Question3 from '@/pages/questionnaire/Question3';
import Question4 from '@/pages/questionnaire/Question4';
import Question5 from '@/pages/questionnaire/Question5';
import Question6 from '@/pages/questionnaire/Question6';

import Adduser from '@/pages/adduser/Index';
import Paymentinfo from '@/pages/paymentinfo/Index';
import Viewinternhistory from '@/pages/viewinternhistory/Index';
import Report from '@/pages/report/Index';

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
      path: '/dashboard2',
      name: '信息总览',
      component: Dashboard2
    },{
      path: '/extracurricular',
      name: '课外活动',
      component: Extracurricular
    },
    {
      path: '/addschool',
      name: '选择学校',
      component: Addschool,
    },
    {
      path: '/planning',
      name: '申请规划',
      component: Planning
    },
    {
      path: '/application',
      name: '申请文书',
      component: Application
    },
    {
      path: '/psupload',
      name: 'PS主文书',
      component: Psupload
    },
    {
      path: '/prize',
      name: '竞赛奖项',
      component: Prize
    },
    {
      path: '/questionnaire',
      name: '调查问卷',
      component: Questionnaire,
      children: [{
        path: '/',
        component: Question0
      }, {
        path: '/step1',
        component: Question1
      }, {
        path: '/step2',
        component: Question2
      }, {
        path: '/step3',
        component: Question3
      }, {
        path: '/step4',
        component: Question4
      }, {
        path: '/step5',
        component: Question5
      }, {
        path: '/step6',
        component: Question6
      }]
    },
    {
      path: '/addtopics',
      name: '添加主题',
      component: Addtopics
    },
    {
      path: '/suppupload',
      name: '补充文书',
      component: Suppupload
    },
    {
      path: '/otherupload',
      name: '其它材料',
      component: Otherupload
    }, {
      path: '/booklets',
      name: '藏书阁',
      component: Booklets
    }, {
      path: '/resources',
      name: '工具资源',
      component: Resources
    },



    {
      path: '/adduser',
      name: '添加账户',
      component: Adduser
    },
    {
      path: '/paymentinfo',
      name: 'INTERN付款方式',
      component: Paymentinfo
    },
    {
      path: '/viewinternhistory',
      name: 'INTERN每周时薪',
      component: Viewinternhistory
    },
    {
      path: '/report',
      name: 'INTERN周报',
      component: Report
    }
  ]
});
