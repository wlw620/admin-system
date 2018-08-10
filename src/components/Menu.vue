<template>
  <Menu theme="light" width="auto" class="menu">
    <!-- logo -->
    <div class="logo-con">
      <img src="../static/imgs/logo.png" alt="三士渡教育">
    </div>
    <!-- logo end -->

    <!-- menu -->
    <template v-for="item in menuList">
      <MenuItem :name="item.name" v-if="!item.children" :to="item.link">
      <Icon type="ios-paper" /> {{item.title}}
      </MenuItem>
      <Submenu v-else>
        <template slot="title">
          <Icon type="ios-people" /> {{item.title}}
        </template>
        <MenuItem :name="childItem.name" v-for="childItem in item.children" :to="childItem.link"> {{childItem.name}}
        </MenuItem>
      </Submenu>
    </template>
  </Menu>
  <!-- menu end-->
</template>

<script>
import "../static/styles/menu.less";
import menuList from "../config/menuListConf";
export default {
  data() {
    return {
      menuList: menuList
    };
  }
};
</script>
