<template>
  <div class="viewinternhistory-container">
    <Card>
      <Form :model="query" label-position="top">
        <Row :gutter="16">
          <Col :sm="12" :xs="24">
          <FormItem label="选择类型">
            <Input v-model="query.Intern"></Input>
          </FormItem>
          </Col>
          <Col :sm="12" :xs="24">
          <FormItem label="选择文件">
            <Input v-model="query.Intern"></Input>
          </FormItem>
          </Col>
          <Col :sm="12" :xs="24">
          <FormItem label="选择文件">
            <Input v-model="query.Intern"></Input>
          </FormItem>
          </Col>
        </Row>
        <div class="submit-wrap-center">
          <Button type="success">SUBMIT 提交</Button>
        </div>
      </Form>
    </Card>
    <Card class="margin-t-10">
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

