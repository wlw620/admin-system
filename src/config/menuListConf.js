  // 个性化导师 mentor: ['dashboard','mentorprofile', name':['menteeprofile','extracurricular','essays', 'schoollist'],'filetime','payment','history,'review','training']
  // 文书导师 esmentor: ['year':'name':['menteeprofile', 'aclist', 'schoollist','essays'], 'training']
  // 行政导师 opmentor: ['year':'name':['dashboard', 'menteeprofile','preview', 'extracurricular','essays', 'schoollist'],'review':['mentorscore','opmentorscore'],'training']
  // 规划导师 headmentor:['year':'name':['menteeprofile', 'extracurricular', 'schoollist']]
  // 专项导师 specialist:['filetime','payment','history']

  import Cookies from 'js-cookie';

  // 学员conf
  import {
    menteeList,
    menteeRole
  } from './mentee';

  // 销售conf
  import {
    salesList,
    salesRole
  } from './sales';

  // 个性化导师conf
  import {
    mentorList,
    mentorRole
  } from './mentor';

  // 文书导师conf
  import {
    esmentorList,
    esmentorRole
  } from './esmentor';

  // 行政导师conf
  import {
    opmentorList,
    opmentorRole
  } from './opmentor';

  // 规划导师conf
  import {
    headmentorList,
    headmentorRole
  } from './headmentor';

  // 专项导师conf
  import {
    specialists,
    specialistRole
  } from './specialist';

  // 其他
  import {
    otherList,
    otherRole
  } from './other';


  /**
   * 角色所对应的展示menu配置
   */
  let roleMap = Object.assign({},
    salesRole,
    menteeRole,
    mentorRole,
    esmentorRole,
    headmentorRole,
    opmentorRole,
    specialistRole,
    otherRole
  );

  roleMap['*'] = [];
  Object.keys(roleMap).forEach((key) => {
    if (roleMap[key]) {
      roleMap['*'] = roleMap['*'].concat(roleMap[key]);
    }
  });

  /**
   * 所有menu配置
   */
  let menuList = []
  menuList = menuList.concat(
    salesList,
    menteeList,
    mentorList,
    esmentorList,
    headmentorList,
    opmentorList,
    specialists,
    otherList
  );

  let roleType = "";
  let filterFn = (item) => {
    if (roleMap[roleType]) {
      return roleMap[roleType].indexOf(item.name) > -1;
    }
  }

  export default (type) => {
    roleType = type;
    console.log("CUSTOMER TYPE:::" + type);
    return menuList.filter(filterFn);
  };
