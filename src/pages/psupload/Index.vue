<template>
  <div class="container-box">
    <Row class="margin-b-10" :gutter="10">
      <Col class="margin-b-10" :xs="24" :sm="12" :md="6" v-for="(infor, i) in inforCardData" :key="`infor-${i}`">
      <div @click="addTheme(infor.eventName)">
        <Card :bordered="false" class="padding-20">
          <p class="font-size-16 font-bold padding-b-20">{{ infor.title }}</p>
          <div class="display-flex">
            <Icon class="font-size-60" :type="infor.icon" :style="infor.color" />
            <count-to v-if="infor.count !== -1" class="font-size-40 font-bold count" :end="infor.count" />
          </div>
        </Card>
      </div>
      </Col>
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
  methods: {
    addTheme(name) {
      if (name === 'add') {
        this.$router.push('/addtopics')
      }
    }
  },
  data() {
    return {
      cityList: [],
      reqInfo: {},
      model1: "",
      inforCardData: [
        {
          title: this.$t("psupload.finish"),
          icon: "ios-create-outline",
          count: 100,
          color: "color:#41b3f9"
        },
        {
          title: this.$t("psupload.unread"),
          icon: "md-close",
          count: 30,
          color: "color:#707cd2"
        },
        {
          title: this.$t("psupload.theme"),
          icon: "md-checkmark",
          count: 70,
          color: "color:#f33155"
        },
        {
          title: this.$t("psupload.newTheme"),
          icon: "md-add",
          eventName: "add",
          count: -1,
          color: "color:#f33155"
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

