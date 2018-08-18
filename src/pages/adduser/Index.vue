<template>
  <div class="container-box adduser-container">
    <Row>
      <Col :xs="20" :sm="18" :md="16" :lg="14">
      <Card :bordered="false">
        <Form :model="formTop" label-position="top">
          <FormItem label="Identity 账户类型">
            <Input v-model="formTop.input1"></Input>
          </FormItem>
          <FormItem label="Username 用户名">
            <Input v-model="formTop.input2"></Input>
          </FormItem>
          <FormItem label="Chinese Name 中文名">
            <Input v-model="formTop.input3"></Input>
          </FormItem>
          <FormItem label="Email 邮箱">
            <Input v-model="formTop.input3"></Input>
          </FormItem>
          <FormItem label="Year 年份">
            <Input v-model="formTop.input3"></Input>
          </FormItem>
        </Form>
        <div class="submit-wrap-center">
          <Button type="success" size="large">SUBMIT</Button>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formTop: {
        input1: "",
        input2: "",
        input3: ""
      }
    };
  }
};
</script>
<style lang="less">
.adduser-container {
  .ivu-col {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>




