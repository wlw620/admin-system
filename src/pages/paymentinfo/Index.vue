<template>
  <div class="container-box paymentinfo-container">
    <Card :bordered="false">
      <Form :model="query" label-position="top">
        <Row :gutter="16">
          <Col :md="8" :sm="12" :xs="24">
          <FormItem label="Intern">
            <Input v-model="query.Intern"></Input>
          </FormItem>
          </Col>
          <Col :md="8" :sm="12" :xs="24">
          <FormItem label="打款方式">
            <Input v-model="query.Intern"></Input>
          </FormItem>
          </Col>
          <Col :md="8" :sm="12" :xs="24">
          <FormItem label="账号">
            <Input v-model="query.Intern"></Input>
          </FormItem>
          </Col>
        </Row>
        <div class="submit-wrap-center">
          <Button type="success">SUBMIT 提交</Button>
        </div>
      </Form>
    </Card>
    <Card :bordered="false" class="margin-t-10">
      <Table :columns="columns" :data="data"></Table>
    </Card>
  </div>

</template>

<script>
export default {
  data() {
    return {
      query: {
        Intern: ""
      }
    };
  }
};
</script>

