<template>
  <div class="container">
    <div class="container-box">
      <Row :gutter="16">
        <Col span="16">
          <Card>
            <p slot="title">TO-DO LIST</p>
            <Table :columns="columns" :data="data"></Table>
          </Card>
          <Card class="margin-t-10">
            <p slot="title">历史纪录</p>
          </Card>
        </Col>
        <Col span="8">
          <Card class="mentee-info" style="height:500px;">
            <Row :gutter="16" type="flex">
              <Col class="mentee-icon">
                <Avatar icon="ios-person" size="large" />
              </Col>
              <Col>
                <h2>张可</h2>
                <p>杭州外国语学院</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import itemContent from './itemContent';
export default {
  data() {
    return {
      columns: [
          {
              type: 'selection',
              width: 60,
              align: 'center'
          },
          {
            title: '描述',
            key: 'info',
            render: (h, params) => {
              return h(itemContent, {
                props: {
                  row: params.row
                }
              });
            }
          }
      ],
      data: [
          {
            info: '完成PS文书第一课',
            subInfo: '5 min ago 有文书导师创建'
          },
          {
            info: '完成PS文书第一课',
            subInfo: '5 min ago 有文书导师创建'
          }
      ]
    }
  },
  methods: {

  }
};
</script>

<style lang="less">
  .mentee-icon {
    align-items:center;
    display: flex;
  }
  .mentee-info {
  }
</style>
