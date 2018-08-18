<template>
  <div class="container-box addtopics-container">
    <Card :bordered="false">
      <Form :model="request" label-position="top">
        <Row :gutter="16">
          <Col :lg="24">
          <FormItem label="请简短命名主题">
            <Input v-model="request.theme"></Input>
          </FormItem>
          </Col>
          <Col :lg="24">
          <FormItem label="请具体描述主题内容">
            <Input v-model="request.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
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
      request: {
        theme: "",
        content: ""
      }
    };
  }
};
</script>

