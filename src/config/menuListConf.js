import Cookies from 'js-cookie';

import {
  menteeList,
  menteeRole
} from './mentee';

import {
  salesList,
  salesRole
} from './sales';

import {
  mentorList,
  mentorRole
} from './mentor';

let roleType;
if (!roleType) {
  roleType = '';
}

let roleMap = {
  // 文书导师
  esmentor: ['esmentor_year', 'esmentor_name', 'esmentor_training'],
  // 行政导师
  opmentor: ['opmentor_year', 'opmentor_review', 'opmentor_training'],
  // 专项导师
  specialist: ['specialist_filetime', 'specialist_payment', 'specialist_history'],

  intern: ['questionnaire', 'dashboard2', 'examination', 'extracurricular', 'prize', 'addschool', 'application', 'suppupload', 'otherupload', 'booklets', 'service'],
  supervisor: ['questionnaire', 'dashboard2', 'examination', 'extracurricular', 'prize', 'addschool', 'application', 'suppupload', 'otherupload', 'booklets', 'service'],
  student: ['questionnaire', 'dashboard2', 'examination', 'extracurricular', 'prize', 'addschool', 'application', 'suppupload', 'otherupload', 'booklets', 'service'],
  admin: ['adduser', 'resources'],
  sale: ['adduser'],
  financial: ['paymentinfo', 'viewinternhistory', 'report'],
  '*': [
    'mentor_dashboard', 'mentor_mentorprofile', 'mentor_name', 'mentor_filetime', 'mentor_payment', 'mentor_history', 'mentor_review', 'mentor_training',
    'mentee_dashboard', 'mentee_information', 'mentee_extracurricular', 'mentee_award', 'mentee_schoollist', 'mentee_essays', 'mentee_preview', 'mentee_other', 'mentee_booklets', 'mentee_history', 'mentee_feedback', , 'resources', 'adduser', 'paymentinfo', 'viewinternhistory', 'report', 'dashboard', 'questionnaire', 'dashboard2', 'examination', 'extracurricular', 'prize', 'addschool', 'application', 'suppupload', 'otherupload', 'booklets', 'service'
  ]
}

roleMap = Object.assign({}, roleMap, salesRole, menteeRole);

let menuList = [{
    link: '/dashboard',
    title: '信息总览',
    name: 'dashboard'
  }, {
    link: '/dashboard2',
    title: '信息总览2',
    name: 'dashboard2'
  }, {
    link: '/examination',
    title: '考试成绩',
    name: 'examination'
  },
  {
    link: '/extracurricular',
    title: '课外活动',
    name: 'extracurricular'
  },
  {
    link: '/service',
    title: '服务反馈',
    name: 'service'
  },
  {
    link: '/addschool',
    title: '选择学校',
    name: 'addschool'
  },
  {
    link: '/planning',
    title: '申请规划',
    name: 'planning',
  },
  {
    link: '/application',
    title: '申请文书',
    name: 'application',
  },
  {
    link: '/questionnaire',
    title: '调查问卷',
    name: 'questionnaire',
  },
  {
    link: '/prize',
    title: '竞赛奖项',
    name: 'prize'
  },
  {
    link: '/psupload',
    title: 'PS主文书',
    name: 'psupload'
  },
  {
    link: '/suppupload',
    title: '补充文书',
    name: 'suppupload',
  },
  {
    link: '/otherupload',
    title: '其它材料',
    name: 'otherupload',
  },
  {
    link: '/booklets',
    title: '藏书阁',
    name: 'booklets',
  },
  {
    link: '/resources',
    title: '工具资源',
    name: 'resources',
  },
  {
    link: '/adduser',
    title: '添加账户',
    name: 'adduser'
  },
  {
    link: '/paymentinfo',
    title: 'INTERN付款方式',
    name: 'paymentinfo'
  },
  {
    link: '/viewinternhistory',
    title: 'INTERN每周时薪',
    name: 'viewinternhistory'
  },
  {
    link: '/report',
    title: 'INTERN周报',
    name: 'report'
  },

  // 文书导师
  {
    link: '/esmentor/year',
    title: '2018',
    name: 'esmentor_year'
  },
  {
    link: '/esmentor/training',
    title: '培训材料',
    name: 'esmentor_training'
  },

  // 行政导师
  {
    link: '/opmentor/year',
    title: '年份学员',
    name: 'opmentor_year'
  },
  {
    link: '/opmentor/review',
    title: '打分',
    name: 'opmentor_review'
  },
  {
    link: '/opmentor/training',
    title: '培训材料',
    name: 'opmentor_training'
  },


  // 规划导师
  {
    link: '/headmentor/year',
    title: 'name',
    name: 'headmentor_year'
  },

  // 专项导师
  {
    link: '/specialist/filetime',
    title: '填报工时',
    name: 'specialist_filetime'
  },
  {
    link: '/specialist/payment',
    title: '查看工资',
    name: 'specialist_payment'
  },
  {
    link: '/specialist/history',
    title: '查看工时',
    name: 'specialist_history'
  }


  // 个性化导师 mentor: ['dashboard','mentorprofile', name':['menteeprofile','extracurricular','essays', 'schoollist'],'filetime','payment','history,'review','training']

  // 文书导师 esmentor: ['year':'name':['menteeprofile', 'aclist', 'schoollist','essays'], 'training']

  // 行政导师 opmentor: ['year':'name':['dashboard', 'menteeprofile','preview', 'extracurricular','essays', 'schoollist'],'review':['mentorscore','opmentorscore'],'training']

  // 规划导师 headmentor:['year':'name':['menteeprofile', 'extracurricular', 'schoollist']]

  // 专项导师 specialist:['filetime','payment','history']

]

menuList = menuList.concat(salesList, menteeList);

let filterFn = (item) => {
  if (roleMap[roleType]) {
    return roleMap[roleType].indexOf(item.name) > -1;
  }
}

export default (type) => {
  roleType = type;
  console.log("TYPe:", type);
  return menuList.filter(filterFn);
};
