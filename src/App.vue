<template>
  <div id="app">
    <!--左侧菜单-->
    <Sider class="menu-wrap">
      <menu-component :activename="activeName"></menu-component>
    </Sider>
    <!--左侧菜单 END-->
    <!--右侧内容-->
    <Layout class="right">
      <Header class="header"></Header>
      <Content class="content">
        <div class="container">
          <router-view></router-view>
        </div>
      </Content>
    </Layout>
    <!--右侧内容-->
  </div>
</template>

<script>
import "./static/styles/common.less";
import "./static/styles/layout.less";
import MenuComponent from "./components/Menu";

export default {
  name: "App",
  data(){
    return {
      activeName:''
    }
  },
  components: {
    "menu-component": MenuComponent
  },
  mounted() {
    this.setBreadCrumb(this.$route);
  },
  methods: {
    setBreadCrumb(route) {
      this.activeName = route.path.slice(1);
      console.error(this.activeName);
    }
  },
  watch: {
    $route(newRoute) {
      this.setBreadCrumb(newRoute);
    }
  }
};
</script>
