<template>
  <div class="login-wrap">
    <Card class="card">
      <ul>
        <Form ref="formInline" :model="loginInfo" inline>
          <li>
            <FormItem class="item" prop="user">
              <Input type="text" v-model="loginInfo.username" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
          </li>
          <li>
            <FormItem class="item" prop="password">
              <Input type="password" v-model="loginInfo.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
          </li>
          <li>
            <FormItem class="item">
              <Button class="button" type="primary" size="large" @click="login" long>LOGIN</Button>
              <Button class="button margin-t-10" type="primary" size="large" long>微信扫码登录</Button>
            </FormItem>
          </li>
        </Form>
      </ul>
    </Card>
  </div>
</template>
<script>
import service from "../service/main/index";
export default {
  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      service
        .login(this.loginInfo)
        .then(res => {
          if (!res || res.err_code) {
            this.$store.commit("unlogin");
          } else {
            this.$store.commit("login");
            this.$store.commit("setIdentity", res.identity);
          }
        })
        .catch(e => {
          this.$store.commit("unlogin");
        });
    }
  }
};
</script>

<style lang="less">
.login-wrap {
  position: relative;
  background: #eee;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .card {
    padding-top: 20px;
    box-sizing: border-box;
    width: 300px;
    height: 320px;
    margin-top: -100px;
  }
  li {
    height: 65px;
    .item {
      width: 100%;
      .ivu-input-wrapper {
        height: 50px;
      }
      .ivu-input,
      .button {
        height: 50px;
      }
    }
  }
}
</style>
