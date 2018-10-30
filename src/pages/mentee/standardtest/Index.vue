<template>

  <div :class="pageClasses">

    <Tabs value="1" type="line">
      <TabPane label="英语能力" name="1">
        <div @click="cardEvent('add')">
          <Card class="card card-add margin-10 fl" :bordered="false">
            <Icon type="md-add" size="110" color="#ccc" />
            <h2 style="color:#ccc">添加文书</h2>
          </Card>
        </div>

        <div @click="cardEvent(1)">
          <Badge dot class="margin-10 fl">
            <Card class="card card-red" :bordered="false">
              <div class="title">
                <p class="en">Personal Statement</p>
                <p class="zh">主文书</p>
              </div>
              <div class="card-content">111</div>
              <Divider orientation="center">最后更新</Divider>
              <div class="foot">2018年08月18日</div>
            </Card>
          </Badge>
        </div>

        <div @click="cardEvent(2)">
          <Badge dot class="margin-10 fl">
            <Card class="card card-blue" :bordered="false">
              <div class="title">
                <p class="en">Personal Statement</p>
                <p class="zh">主文书</p>
              </div>
              <div class="card-content">111</div>
              <Divider orientation="center">最后更新</Divider>
              <div class="foot">2018年08月18日</div>
            </Card>
          </Badge>
        </div>
      </TabPane>
      <TabPane label="美国高考" name="2">
        <div @click="cardEvent('add')">
          <Card class="card card-add margin-10 fl" :bordered="false">
            <Icon type="md-add" size="110" color="#ccc" />
            <h2 style="color:#ccc">添加文书</h2>
          </Card>
        </div>

        <div @click="cardEvent(1)">
          <Badge dot class="margin-10 fl">
            <Card class="card card-red" :bordered="false">
              <div class="title">
                <p class="en">Personal Statement</p>
                <p class="zh">主文书</p>
              </div>
              <div class="card-content">111</div>
              <Divider orientation="center">最后更新</Divider>
              <div class="foot">2018年08月18日</div>
            </Card>
          </Badge>
        </div>

        <div @click="cardEvent(2)">
          <Badge dot class="margin-10 fl">
            <Card class="card card-blue" :bordered="false">
              <div class="title">
                <p class="en">Personal Statement</p>
                <p class="zh">主文书</p>
              </div>
              <div class="card-content">111</div>
              <Divider orientation="center">最后更新</Divider>
              <div class="foot">2018年08月18日</div>
            </Card>
          </Badge>
        </div>
      </TabPane>
      <TabPane label="单项考试" name="3">
        <div @click="cardEvent('add')">
          <Card class="card card-add margin-10 fl" :bordered="false">
            <Icon type="md-add" size="110" color="#ccc" />
            <h2 style="color:#ccc">添加文书</h2>
          </Card>
        </div>

        <div @click="cardEvent(1)">
          <Badge dot class="margin-10 fl">
            <Card class="card card-red" :bordered="false">
              <div class="title">
                <p class="en">Personal Statement</p>
                <p class="zh">主文书</p>
              </div>
              <div class="card-content">111</div>
              <Divider orientation="center">最后更新</Divider>
              <div class="foot">2018年08月18日</div>
            </Card>
          </Badge>
        </div>

        <div @click="cardEvent(2)">
          <Badge dot class="margin-10 fl">
            <Card class="card card-blue" :bordered="false">
              <div class="title">
                <p class="en">Personal Statement</p>
                <p class="zh">主文书</p>
              </div>
              <div class="card-content">111</div>
              <Divider orientation="center">最后更新</Divider>
              <div class="foot">2018年08月18日</div>
            </Card>
          </Badge>
        </div>
      </TabPane>
      <TabPane label="学位体系" name="4">

        <div @click="cardEvent('add')">
          <Card class="card card-add margin-10 fl" :bordered="false">
            <Icon type="md-add" size="110" color="#ccc" />
            <h2 style="color:#ccc">添加文书</h2>
          </Card>
        </div>

        <div @click="cardEvent(1)">
          <Badge dot class="margin-10 fl">
            <Card class="card card-red" :bordered="false">
              <div class="title">
                <p class="en">Personal Statement</p>
                <p class="zh">主文书</p>
              </div>
              <div class="card-content">111</div>
              <Divider orientation="center">最后更新</Divider>
              <div class="foot">2018年08月18日</div>
            </Card>
          </Badge>
        </div>

        <div @click="cardEvent(2)">
          <Badge dot class="margin-10 fl">
            <Card class="card card-blue" :bordered="false">
              <div class="title">
                <p class="en">Personal Statement</p>
                <p class="zh">主文书</p>
              </div>
              <div class="card-content">111</div>
              <Divider orientation="center">最后更新</Divider>
              <div class="foot">2018年08月18日</div>
            </Card>
          </Badge>
        </div>
      </TabPane>
    </Tabs>



  </div>

    <!-- <float-layer>抽屉组件内容。。。</float-layer> -->

    <!-- <div :class="detailClasses">
      <h5>文书{{titleTxt}}</h5>
      <div class="margin-20">
        <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
          </div>
        </Upload>

        <Table class="margin-t-20" :columns="columns1" :data="data1"></Table>

      </div>
    </div> -->
</template>

<script>
import floatLayer from "../../../components/FloatLayer";
export default {
  data() {
    return {
      titleTxt: "",
      currentCardId: "",
      addCardFlag: false,
      detailFlag: false,
      foldFlah: false,

      columns1: [
        {
          title: "Time",
          key: "time"
        },
        {
          title: "Info",
          key: "info"
        },
        {
          title: "Name",
          key: "name"
        }
      ],
      data1: [
        {
          name: "I have a dream_V2",
          info: "xx 上传了文件",
          time: "2016-10-03"
        },
        {
          name: "I have a dream_V2",
          info: "xx 上传了文件",
          time: "2016-10-03"
        },
        {
          name: "I have a dream_V2",
          info: "xx 上传了文件",
          time: "2016-10-03"
        }
      ]
    };
  },
  computed: {
    pageClasses() {
      return ["container-box", "application-container"];
    },
    detailClasses() {
      return ["detail", this.foldFlah ? "detail-fold" : ""];
    }
  },
  methods: {
    cardEvent(id) {
      if (id === this.currentCardId) {
        this.foldFlah = false;
        this.currentCardId = "";
      } else {
        this.foldFlah = true;
        this.currentCardId = id;
      }
      this.$set(this, "titleTxt", id);
    }
  },
  components: {
    'float-layer': floatLayer
  }
};
</script>


<style lang="less">
.fold {
  padding-right: 45%;
}
.detail {
  position: absolute;
  padding-top: 60px;
  background: #fff;
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 100%;
  box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.2);
}

.detail-fold {
  width: 40%;
}
.application-container {
  height: 100%;
  width: 100%;
  background: #eee;
  .card-add {
    padding-top: 20px;
    text-align: center;
  }
  .card-blue {
    .title {
      background: #2b85e4;
    }
  }
  .card-red {
    .title {
      background: #b60000;
    }
  }

  .card {
    position: relative;
    width: 180px;
    height: 240px;
    .title {
      position: absolute;
      padding: 10px 0 0 10px;
      width: 100%;
      left: 0;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      top: 0;
      height: 60px;
      p {
        line-height: 20px;
        font-size: 14px;
        color: #fff;
        font-weight: bold;
      }
    }
    .card-content {
      padding: 0;
      height: 114px;
      margin-top: 60px;
    }
    .foot {
      font-size: 12px;
      text-align: center;
    }
    .ivu-divider {
      color: #999;
      margin: 0;
      font-size: 12px;
      margin-bottom: 6px;
    }
  }
}
</style>

