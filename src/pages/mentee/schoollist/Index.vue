<template>
  <div class="container-box">
    <Row>
      <Card :bordered="false" class="margin-b-20">
        <Form :mode="formData" label-position="top">
          <Col span="10" class="col">
          <FormItem :label="$t('addschool.schoolnameTit')">
            <Select :model="formData.schoolid" :placeholder="$t('addschool.choose')" filterable clearable>
              <Option v-for="item in schoollist" :value="item.schoolid" :key="item.schoolid">{{ item.schoolname }}</Option>
            </Select>
          </FormItem>
          </Col>
          <Col span="10" class="col">
          <FormItem :label="$t('addschool.batchTit')">
            <Select :model="formData.batch">
              <Option value="regular">RD/Rolling</Option>
              <Option value="earlyone">EA/ED/REA</Option>
              <Option value="earlytwo">ED2</Option>
            </Select>
          </FormItem>
          </Col>
          <Col span="4" class="col">
          <Button class="buttom" type="primary" @click="addSchool">
            {{$t("addschool.submitTxt")}}
          </Button>
          </Col>
        </Form>
      </Card>
    </Row>
    <Row>
      <Card :bordered="false" class="margin-b-20">
        <Table :columns="columns" :data="listData"></Table>
      </Card>
    </Row>
  </div>
</template>

<script>
import service from "../../../service/mentee/schoollist";
import expandRow from "./expand";

export default {
  components: { expandRow },
  data() {
    return {
      columns: [
        {
          title: "学校",
          key: "schoolname",
          render: (h, params) => {
            return h("div", [
              h("span", params.row.schoolname + " " + params.row.schoolcname)
            ]);
          }
        },
        {
          title: "学校类型",
          key: "schooltype"
        },
        {
          title: "Supp数量",
          key: "supp"
        },
        {
          title: "申请批次",
          key: "cycle"
        },
        {
          title: "截止日期",
          key: "deadline"
        },
        {
          title: "删除学校",
          key: "remove",
          render: (h, params) => {
            h(
              "Button",
              {
                props: {
                  type: "error",
                  size: "small"
                },
                on: {
                  click: () => {
                    this.remove(params.index);
                  }
                }
              },
              "Remove"
            );
          }
        }
      ],
      listData: [],
      schoollist: [],
      formData: {
        schoolid: "",
        cycle: "regular"
      }
    };
  },
  methods: {
    init() {
      this.getMainData();
    },
    getMainData() {
      service.getMainData().then(res => {
        this.schoollist = res.schoollist;
        this.listData = res.selectedschools;
        this.formData.schoolid = this.schoollist[0].schoolid;
      });
    },
    remove(index) {
      let param = {
        schoolid:1,
        cycle:1
      };

      service.removeSchool();
    },
    onOpen(isOpen) {},
    addSchool() {
      let params = formData;
      service.addSchool(params).then(res => {
        this.getMainData();
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
.col {
  padding-right: 40px;
  height: 100px;
}
.ivu-select-placeholder {
  text-align: left;
}
.ivu-select-selected-value {
  text-align: left;
}
.buttom {
  margin-top: 30px;
}
</style>
