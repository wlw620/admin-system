<template>
  <div id="app">
    {{login}}
    <loading-component v-if="login===null"></loading-component>
    <login-component v-else-if="!login"></login-component>
    <div v-else-if="login" class="layout">
      <Layout :style="{minHeight: '100vh'}">
        <!--左侧菜单-->
        <Sider theme="light" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}" collapsible :collapsed-width="78" v-model="isCollapsed">
          <menu-component :menuitemClasses="menuitemClasses" :activename="activeName"></menu-component>
        </Sider>
        <!--左侧菜单 END-->
        <!--右侧内容-->
        <Layout :class="rightClasses">
          <Header class="header"></Header>
          <Content class="content">
            <div class="container">
              <router-view></router-view>
            </div>
          </Content>
        </Layout>
        <!--右侧内容-->
      </Layout>
    </div>
  </div>
</template>

<script>
import "./static/styles/common.less";
import "./static/styles/layout.less";
import LoadingComponent from "./components/Loading";
import LoginComponent from "./components/Login";
import MenuComponent from "./components/Menu";
import service from "./service/main/index";

export default {
  name: "App",
  data() {
    return {
      isCollapsed: false,
      activeName: ""
    };
  },
  components: {
    "menu-component": MenuComponent,
    "loading-component": LoadingComponent,
    "login-component": LoginComponent
  },
  computed: {
    login() {
      return this.$store.state.isLogin;
    },
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    rightClasses: function() {
      return ["right", this.isCollapsed ? "collapsed-right" : ""];
    }
  },
  mounted() {
    setTimeout(this.getLoginState, 1000);
    this.setBreadCrumb(this.$route);
  },
  methods: {
    getLoginState() {
      service
        .getLoginState()
        .then(res => {
          let some = res.err_code || res.need_to_login ? "unlogin" : "login";
          this.$store.commit(some);
          // this.$set(this, "isLogin", !res.need_to_login);
        })
        .catch(e => {});
    },
    setBreadCrumb(route) {
      this.activeName = route.path.slice(1);
    }
  },
  watch: {
    $route(newRoute) {
      this.setBreadCrumb(newRoute);
    }
  }
};
</script>
