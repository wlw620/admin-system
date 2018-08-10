<template>
  <div>
    <Row class="margin-b-10" :gutter="10">
      <Col class="margin-b-10" :xs="24" :sm="12" :md="6" v-for="(infor, i) in inforCardData" :key="`infor-${i}`">
      <Card class="padding-20">
        <p class="font-size-16 font-bold padding-b-20">{{ infor.title }}</p>
        <div class="display-flex">
          <Icon class="font-size-60" :type="infor.icon" :style="infor.color" />
          <count-to class="font-size-40 font-bold count" :end="infor.count" />
        </div>
      </Card>
      </Col>
    </Row>

    <Row>
      <Card class="margin-b-20">
        <Form :mode="reqInfo" label-position="top">
          <Col class="margin-r-20" span="7">
          <FormItem :label="$t('suppupload.selectSubjectTxt')">
            <Select v-model="model1">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          </Col>
          <Col class="margin-r-20" span="7">
          <FormItem :label="$t('suppupload.selectFileTxt')">
            <Select v-model="model1">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          </Col>
          <Col class="margin-r-20" span="7">
          <FormItem :label="$t('suppupload.selectTeacherTxt')">
            <Select v-model="model1">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          </Col>
          <Col span="3">
          <Button class="margin-r-20 buttom" type="primary">
            {{$t("suppupload.uploadTxt")}}
          </Button>
          </Col>
        </Form>
      </Card>
    </Row>
  </div>
</template>

<script>
import TableComponent from "../../components/Table";
import CountTo from "../../components/Countto";

export default {
  components: {
    CountTo
  },
  data() {
    return {
      inforCardData: [
        {
          title: "总补充文书",
          icon: "ios-create-outline",
          count: 100,
          color: "color:#41b3f9"
        },
        {
          title: "未写文书数",
          icon: "md-close",
          count: 30,
          color: "color:#707cd2"
        },
        {
          title: "已写篇数",
          icon: "md-checkmark",
          count: 70,
          color: "color:#f33155"
        },
        {
          title: "未改篇数",
          icon: "md-code-working",
          count: 30,
          color: "color:#7ace4c"
        }
      ]
    };
  }
};
</script>

<style>
.count {
  flex: 1;
  text-align: right;
}
.bottom {
  margin-top: 24px;
}
</style>

