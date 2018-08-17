<template>
  <Card>
    <h3 class="padding-b-10 border-line">{{$t('planning.contentTxt')}}</h3>
    <Row>

      <Tabs class="margin-t-20">
        <TabPane :label="$t('planning.tab1')" icon="logo-apple">标签一2的内容</TabPane>
        <TabPane :label="$t('planning.tab2')" icon="logo-windows">标签二的内容</TabPane>
        <TabPane :label="$t('planning.tab3')" icon="logo-tux">标签三的内容</TabPane>
        <TabPane :label="$t('planning.tab4')" icon="logo-tux">标签三的内容</TabPane>
      </Tabs>

    </Row>
  </Card>
</template>
<style lang="less">
.col {
  padding-right: 40px;
  height: 100px;
}
.ivu-form .ivu-form-item-label {
  font-size: 14px;
  font-weight: bold;
}
.ivu-select-placeholder {
  text-align: left;
}
.ivu-select-selected-value {
  text-align: left;
}
.buttom {
  margin-top: 35px;
}
</style>

<script>
import "../../static/styles/tab.less";
import TableComponent from "../../components/Table";

export default {
  data() {
    return {
      cityList: [
        {
          value: "New York",
          label: "New York"
        },
        {
          value: "London",
          label: "London"
        },
        {
          value: "Sydney",
          label: "Sydney"
        },
        {
          value: "Ottawa",
          label: "Ottawa"
        },
        {
          value: "Paris",
          label: "Paris"
        },
        {
          value: "Canberra",
          label: "Canberra"
        }
      ],
      addSchoolInfo: {
        schoolName: "",
        batch: ""
      }
    };
  },
  components: {
    "table-compoent": TableComponent
  },
  methods: {
    onOpen(isOpen) {
      //  this.refs.addschoolSelect.setQuery('');
    }
  }
};
</script>
