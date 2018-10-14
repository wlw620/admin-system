import Cookies from 'js-cookie'

let roleType;
if (!roleType) {
  roleType = '';
}
let roleList = {
  sales: ['dashboard', 'questionnaire', 'dashboard2', 'examination', 'extracurricular', 'prize', 'addschool', 'application', 'suppupload', 'otherupload', 'booklets', 'service'],
  intern: ['questionnaire', 'dashboard2', 'examination', 'extracurricular', 'prize', 'addschool', 'application', 'suppupload', 'otherupload', 'booklets', 'service'],
  supervisor: ['questionnaire', 'dashboard2', 'examination', 'extracurricular', 'prize', 'addschool', 'application', 'suppupload', 'otherupload', 'booklets', 'service'],
  student: ['questionnaire', 'dashboard2', 'examination', 'extracurricular', 'prize', 'addschool', 'application', 'suppupload', 'otherupload', 'booklets', 'service'],
  admin: ['adduser', 'resources'],
  sale: ['adduser'],
  financial: ['paymentinfo', 'viewinternhistory', 'report'],
  '*': [
    'sales_viewcustomer', 'sales_addcustomer','sales_dashboard', 'resources','adduser','paymentinfo', 'viewinternhistory', 'report','dashboard', 'questionnaire', 'dashboard2', 'examination', 'extracurricular', 'prize', 'addschool', 'application', 'suppupload', 'otherupload', 'booklets', 'service'
  ]
}

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

  {
    link: '/sales/dashboard',
    title: '销售信息总览',
    name: 'sales_dashboard'
  },

  {
    link: '/sales/addcustomer',
    title: '添加客户',
    name: 'sales_addcustomer'
  },

  {
    link: '/sales/viewcustomer',
    title: '客户人',
    name: 'sales_viewcustomer'
  }

]

let filterFn = (item) => {
  if (roleList[roleType]) {
    return roleList[roleType].indexOf(item.name) > -1;
  }
}


export default (type) => {
  roleType = type;
  console.log(type);
  return menuList.filter(filterFn);
};
