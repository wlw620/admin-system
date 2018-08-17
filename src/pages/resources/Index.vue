<template>
  <div class="booklets-container">
    <Row :gutter="16">
      <Col :xs="24" :sm="12">
      <Card>
        <p slot="title">{{$t('resources.cardTxt1')}}</p>
        <div class="margin-t-10">
          <Button size="large" type="error" ghost long>{{$t('resources.course')}}</Button>
        </div>
      </Card>
      </Col>
      <Col :xs="24" :sm="12">
      <Card>
        <p slot="title">{{$t('resources.cardTxt2')}}</p>
        <div>
          <h3>语法利器 - Grammarly</h3>
          <Progress :percent="25" hide-info />
          <Row class="margin-t-10">
            <Col :xs="24" :sm="12">
            <dl>
              <dt>用户名</dt>
              <dd>info@stoooges.com</dd>
            </dl>
            </Col>
            <Col :xs="24" :sm="12">
            <dl>
              <dt>密码</dt>
              <dd>Stoooges</dd>
            </dl>
            </Col>
          </Row>
        </div>

        <Divider />

        <div class="margin-t-20">
          <h3>语法利器 - Grammarly</h3>

          <Progress :percent="25" hide-info />
          <Row class="margin-t-10">
            <Col :xs="24" :sm="12">
            <dl>
              <dt>用户名</dt>
              <dd>info@stoooges.com</dd>
            </dl>
            </Col>
            <Col :xs="24" :sm="12">
            <dl>
              <dt>密码</dt>
              <dd>Stoooges</dd>
            </dl>
            </Col>
          </Row>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less">
.booklets-container {
  .ivu-card-head {
    background: #17233d;
    p {
      color: #fff;
      font-size: 18px;
    }
  }
}
</style>

