<template>
  <div class="container-box report-container">
    <Card :bordered="false">
      <Form :model="query" label-position="top">
        <Row :gutter="16">
          <Col :sm="12" :xs="24">
          <FormItem label="选择年份">
            <Input v-model="query.Intern"></Input>
          </FormItem>
          </Col>
          <Col :sm="12" :xs="24">
          <FormItem label="选择周">
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

