<template>
  <div class="container-box dashboard-container">
    <Row :gutter="16">
      <Col :md="8" :sm="12">
      <h4 class="title">todo list</h4>
      <Card>
        <ul>
          <li>
            <Checkbox label=""></Checkbox>完成PS主文书第一稿</li>
          <li>
            <Checkbox label=""></Checkbox>完成PS主文书第一稿</li>
          <li>
            <Checkbox label=""></Checkbox>完成PS主文书第一稿</li>
          <Divider />
        </ul>
      </Card>
      <h4 class="title">todo list</h4>
      <Card>
        <ul>
          <li>
            <Checkbox label=""></Checkbox>完成PS主文书第一稿</li>
          <li>
            <Checkbox label=""></Checkbox>完成PS主文书第一稿</li>
          <li>
            <Checkbox label=""></Checkbox>完成PS主文书第一稿</li>
          <Divider />
        </ul>
      </Card>
      </Col>
      <Col :md="8" :sm="12">
      <h4 class="title">学校列表</h4>
      <Card>
        <ul>
          <li>
            <p>hava</p>
            <Progress :percent="25" status="active" hide-info />
          </li>
          <li>
            <p>hava</p>
            <Progress :percent="45" status="active" hide-info />
          </li>
          <li>
            <p>hava</p>
            <Progress :percent="75" status="active" hide-info />
          </li>
          <li>
            <p>hava</p>
            <Progress :percent="25" status="active" hide-info />
          </li>
          <li>
            <p>hava</p>
            <Progress :percent="45" status="active" hide-info />
          </li>
          <li>
            <p>hava</p>
            <Progress :percent="75" status="active" hide-info />
          </li>
          <li>
            <p>hava</p>
            <Progress :percent="25" status="active" hide-info />
          </li>
          <li>
            <p>hava</p>
            <Progress :percent="45" status="active" hide-info />
          </li>
          <li>
            <p>hava</p>
            <Progress :percent="75" status="active" hide-info />
          </li>
        </ul>
      </Card>
      </Col>
      <Col :md="8" :sm="12">
      <h4 class="title">个人资料</h4>
      <Card>

      </Card>
      <h4 class="title">导师列表</h4>
      <Card>

      </Card>
      </Col>
    </Row>
  </div>
</template>
<style lang="less">
.dashboard-container {
  .title {
    padding: 10px 0;
  }
  li {
    margin-bottom: 4px;
  }
}
</style>

<script>
import service from "../../service/dashboard/index";
export default {
  data() {
    return {};
  },
  mounted() {
    service.getDashboardData().then(res => {
      console.log(res);
    });
  }
};
</script>
