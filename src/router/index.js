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


import Adduser from '@/pages/adduser/Index';
import Paymentinfo from '@/pages/paymentinfo/Index';
import Viewinternhistory from '@/pages/viewinternhistory/Index';
import Report from '@/pages/report/Index';

import SalesDashboard from '@/pages/sales/dashboard/Index';
import SalesAddcustomer from '@/pages/sales/addcustomer/Index';
import SalesViewcustomer from '@/pages/sales/viewcustomer/Index';



//学生端
import Schoollist from '@/pages/mentee/schoollist/Index';
import Essays from '@/pages/mentee/essays/Index';
import Standardtest from '@/pages/mentee/standardtest/Index';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: Dashboard
    },

    // mentee: ['mentee_dashboard', 'mentee_information', 'mentee_extracurricular', 'mentee_award', 'mentee_schoollist', 'mentee_essays', 'mentee_preview', 'mentee_other', 'mentee_booklets', 'mentee_history', 'mentee_feedback'],

    // 学员端
    {
      path: '/mentee/dashboard',
      name: '信息总览',
      component: Dashboard
    },
    {
      path: '/mentee/information',
      name: '个人信息',
      component: Dashboard
    },
    {
      path: '/mentee/extracurricular',
      name: '课外活动',
      component: Dashboard
    },
    {
      path: '/mentee/standardtest',
      name: '考试成绩',
      component: Standardtest

    },
    {
      path: '/mentee/awards',
      name: '成绩奖项',
      component: Dashboard
    },
    {
      path: '/mentee/schoollist',
      name: '选校列表',
      component: Schoollist
    },
    {
      path: '/mentee/essays',
      name: '申请文书',
      component: Essays
    },
    {
      path: '/mentee/preview',
      name: '申请审核',
      component: Dashboard
    },
    {
      path: '/mentee/other',
      name: '其他材料',
      component: Dashboard
    },
    {
      path: '/mentee/booklets',
      name: '藏经阁',
      component: Dashboard
    },
    {
      path: '/mentee/history',
      name: '交流记录',
      component: Dashboard
    },
    {
      path: '/mentee/feedback',
      name: '服务反馈',
      component: Dashboard
    },

    // 个性化导师
    {
      path: '/mentor/dashboard',
      name: '服务反馈',
      component:Dashboard
    },
    {
      path: '/mentor/feedback',
      name: '服务反馈',
      component:Dashboard
    },
    {
      path: '/mentor/name',
      name: 'name',
      component:Dashboard
    },
    {
      path: '/mentor/filetime',
      name: 'name',
      component:Dashboard
    },
    {
      path: '/mentor/payment',
      name: 'name',
      component:Dashboard
    },
    {
      path: '/mentor/history',
      name: 'name',
      component:Dashboard
    },
    {
      path: '/mentor/review',
      name: 'name',
      component:Dashboard
    },
    {
      path: '/mentor/training',
      name: 'name',
      component:Dashboard
    },


    // 专项导师
    {
      path: '/specialist/filetime',
      name: '填报工时',
      component: Dashboard
    },
    {
      path: '/specialist/payment',
      name: '查看工资',
      component: Dashboard
    },
    {
      path: '/specialist/history',
      name: '查看工时',
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
      path: '/questionnaire/:id',
      name: '调查问卷',
      component: Questionnaire,

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
    },

    {
      path: '/sales/dashboard',
      name: '销售信息总览',
      component: SalesDashboard
    },

    {
      path: '/sales/addcustomer',
      name: '添加客户',
      component: SalesAddcustomer
    },

    {
      path: '/sales/viewcustomer',
      name: '客户人',
      component: SalesViewcustomer
    }
  ]
});
