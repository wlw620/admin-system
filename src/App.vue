<template>
  <div id="app">
    <div class="layout">
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
import MenuComponent from "./components/Menu";

export default {
  name: "App",
  data() {
    return {
      isCollapsed: false,
      activeName: ""
    };
  },
  components: {
    "menu-component": MenuComponent
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    rightClasses: function() {
      return ["right", this.isCollapsed ? "collapsed-right" : ""];
    }
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
