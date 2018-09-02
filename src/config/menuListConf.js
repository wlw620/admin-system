import Cookies from 'js-cookie'

let userType = Cookies.get('userType') || 'student';

let user = {
  student: ['dashboard', 'addschool', 'application', 'booklets'],
  admin: ['adduser', 'resources'],
  financial: ['paymentinfo', 'viewinternhistory', 'report'],
}

let menuList = [{
    link: '/dashboard',
    title: '信息总览',
    name: 'dashboard'
  }, {
    link: '/dashboard2',
    title: '信息总览2',
    name: 'dashboard2'
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
  }
]

let filterFn = (item) => {
  console.log(item.name);
  return user[userType].indexOf(item.name) > -1;
}


export default (() => {
  return menuList.filter(filterFn);
})();
