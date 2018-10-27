<template>
  <div class="container-box">
    <Row>
      <Card :bordered="false" class="margin-b-20">
        <Form :mode="reqInfo" label-position="top">
          <Col span="10" class="col">
          <FormItem :label="$t('addschool.schoolnameTit')">
            <Select :model="reqInfo.schoolName" ref="addschoolSelect" :placeholder="$t('addschool.choose')" @on-open-change="onOpen" filterable clearable>
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          </Col>
          <Col span="10" class="col">
          <FormItem :label="$t('addschool.batchTit')">
            <Select :model="reqInfo.batch">
              <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          </Col>
          <Col span="4" class="col">
          <Button class="buttom" type="primary">
            {{$t("addschool.submitTxt")}}
          </Button>
          </Col>
        </Form>
      </Card>
    </Row>
    <Row>
      <Card :bordered="false" class="margin-b-20">
        <Table :columns="columns" :data="data"></Table>
      </Card>
    </Row>
  </div>
</template>

<script>
import expandRow from "./expand";

export default {
  components: { expandRow },
  data() {
    return {
      columns: [
        {
          type: "expand",
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            });
          }
        },
        {
          title: this.$t('addschool.tabTitle1'),
          key: "name"
        },
        {
          title: this.$t('addschool.tabTitle2'),
          key: "age"
        },
        {
          title: this.$t('addschool.tabTitle3'),
          key: "address"
        },
        {
          title: this.$t('addschool.tabTitle4'),
          key: "address"
        },
        {
          title: this.$t('addschool.tabTitle1'),
          key: "address"
        },
        {
          title: this.$t('addschool.tabTitle5'),
          key: "address"
        },
         {
          title: this.$t('addschool.tabTitle6'),
          key: "address"
        }
      ],
      data: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          job: "Data engineer",
          interest: "badminton",
          birthday: "1991-05-14",
          book: "Steve Jobs",
          movie: "The Prestige",
          music: "I Cry"
        },
        {
          name: "Jim Green",
          age: 25,
          address: "London No. 1 Lake Park",
          job: "Data Scientist",
          interest: "volleyball",
          birthday: "1989-03-18",
          book: "My Struggle",
          movie: "Roman Holiday",
          music: "My Heart Will Go On"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          job: "Data Product Manager",
          interest: "tennis",
          birthday: "1992-01-31",
          book: "Win",
          movie: "Jobs",
          music: "Don’t Cry"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          job: "Data Analyst",
          interest: "snooker",
          birthday: "1988-7-25",
          book: "A Dream in Red Mansions",
          movie: "A Chinese Ghost Story",
          music: "actor"
        }
      ],

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
      reqInfo: {
        schoolName: "",
        batch: ""
      }
    };
  },
  methods: {
    onOpen(isOpen) {
      //  this.refs.addschoolSelect.setQuery('');
    }
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
