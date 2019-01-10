<template>
  <div>
    {{isLayerDisplay}}
    <div :class="pageClasses">
      <div @click="eventAddEssays">
        <Card class="card card-add margin-10 fl" :bordered="false">
          <Icon type="md-add" size="110" color="#ccc"/>
          <h2 style="color:#ccc">添加文书</h2>
        </Card>
      </div>

      <div
        v-for="item in essaysList"
        :key="item.id"
        @click="cardEvent({
          pid: item.id,
          topic: item.topic,
          type: item.type,
          title: item.title,
        })"
      >
        <Badge dot class="margin-10 fl">
          <Card class="card card-blue" :bordered="false">
            <div class="title">
              <p class="en">{{ item.topic }}</p>
              <p class="zh">{{ item.type }}</p>
            </div>
            <div class="card-content">{{ item.title }}</div>
            <Divider orientation="center">最后更新</Divider>
            <div class="foot" v-html="marked(item.last_update_time)">{{ item.last_update_time }}</div>
          </Card>
        </Badge>
      </div>
    </div>

    <Modal v-model="isModelDisplay" title="添加文书" @on-ok="addProject" ok-text="提交" cancelText>
      <add-essays ref="addForm"></add-essays>
    </Modal>

    <float-layer v-bind:display="isLayerDisplay" v-on:close="eventCloseLayer">
      <div :class="detailClasses">
        <h3 class="title">
          {{currentCardInfo.topic}} {{currentCardInfo.title}}
          <Button
            class="remove-project"
            type="error"
            size="small"
            @click="removeProject(currentCardInfo.pid)"
          >删除文书</Button>
          <Icon type="md-close" @click="eventCloseLayer"/>
        </h3>
        <!-- <p class="desc">I have a dream</p> -->
        <div class="margin-20">
          <Upload
            type="drag"
            :on-success="uploadSuccess"
            action="http://maze.stoooges.cn:5001/mentee/upload"
          >
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>Click or drag files here to upload</p>
            </div>
          </Upload>

          <Table class="margin-t-20" :columns="columns" :data="historyList"></Table>
        </div>
        <div class="bottom-bar">
          <Button type="error" @click="deleteAll">删除全部</Button>
        </div>
      </div>
    </float-layer>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import floatLayer from "../../../components/FloatLayer";
import addEssays from "./AddEssays";
import service from "../../../service/mentee/essays";
export default {
  data() {
    return {
      currentCardInfo: {},
      file: null,
      isModelDisplay: false,
      isLayerDisplay: false,
      currentCardId: "",
      addCardFlag: false,
      detailFlag: false,
      foldFlah: false,
      essaysList: [],
      columns: [
        {
          title: "Filename",
          key: "filename"
        },
        {
          title: "Time",
          key: "update_time",
          render: (h, params) => {
            return h(
              "span",
              moment(params.row.update_time).format("YYYY-MM-DD hh:mm:ss")
            );
          }
        },
        {
          title: "Time",
          key: "update_time",
          width: 80,
          render: (h, params) => {
            return h(
              "Button",
              {
                props: {
                  type: "succcess",
                  size: "small"
                },
                style: {
                  marginRight: "5px"
                },
                on: {
                  click: () => {
                    this.download({
                      pid: params.row.pid,
                      project_history_id: params.row.project_history_id
                    });
                  }
                }
              },
              "下载"
            );
          }
        }
      ],
      historyList: []
    };
  },
  mounted() {
    this.init();
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
    init() {
      this.getMainData();
    },
    async getMainData() {
      let data = await service.getMainData();
      this.essaysList = _.get(data, "project", []);
    },
    handleUpload(file) {
      this.file = file;
      return false;
    },
    async addProject() {
      let addParams = this.$refs.addForm.formData;
      let res = await service.addProject(addParams);
      if (res && res.addproject_success) {
        console.log("添加文书成功");
        this.getMainData();
        this.$refs.addForm.reset();
      }
    },
    async removeProject(id) {
      this.$Modal.confirm({
        content: "确认要删除此文书吗？",
        okText: "确认删除",
        cancelText: "再想想",
        onOk: async () => {
          let res = await service.removeProject({ pid: id });
          if (res && res.removeproject_success) {
            console.log("删除文书成功");
            this.getMainData();
            this.$refs.addForm.reset();
          }
          this.eventCloseLayer();
        }
      });
    },
    async uploadSuccess(response, file, fileList) {
      console.log("提交文件成功,上传表单中...");
      let params = this.currentCardInfo;
      let fileName = _.get(response, "temp_filename");
      if (params && fileName) {
        params.temp_filename = fileName;
        let res = await service.upload(params);
        if (res && res.save_success) {
          console.log("上传成功，重新加载数据");
          this.getUploadHistory(params.pid);
        }
      }
    },
    download(params) {
      window.open(
        "http://maze.stoooges.cn:5001/mentee/download?pid=" +
          params.pid +
          "&project_history_id=" +
          params.project_history_id
      );
    },
    delete() {},
    deleteAll() {},
    eventAddEssays() {
      this.isModelDisplay = true;
    },
    cardEvent(params) {
      this.currentCardInfo = params;
      this.isLayerDisplay = true;
      this.foldFlah = true;
      this.getUploadHistory(params.pid);
    },
    async getUploadHistory(id) {
      let data = await service.essayhistory(id);
      if (data) {
        this.historyList = data.history;
      }
    },
    eventCloseLayer() {
      this.isLayerDisplay = false;
      this.historyList = [];
    },
    ok() {},
    cancel() {},
    marked(content) {
      return moment(content).format("YYYY-MM-DD hh:mm:ss");
    }
  },
  components: {
    "float-layer": floatLayer,
    "add-essays": addEssays
  }
};
</script>


<style lang="less">
.title {
  font-size: 16px;
  padding: 20px 0 0 20px;
  line-height: 30px;
  position: relative;

  .ivu-icon {
    position: absolute;
    right: 20px;
    font-size: 26px;
  }
}

.remove-project {
  margin-top: -3px;
  margin-left: 10px;
}

.desc {
  padding: 5px 0 0 20px;
}

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

.bottom-bar {
  padding-right: 20px;
  text-align: center;
}

.detail-fold {
  width: 100%;
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

