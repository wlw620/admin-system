<template>
  <div>

    <div :class="pageClasses">
      <Collapse simple v-model="arr">

        <Panel name="1">
          英语能力
          <div slot="content" style="overflow:hidden">
            <Divider class="black" />

            <div @click="cardEvent('add', '1')">
              <Card class="card card-add margin-10 fl" :bordered="false">
                <Icon type="md-add" size="110" color="#ccc" />
                <h2 style="color:#ccc">添加成绩</h2>
              </Card>
            </div>

            <div @click="cardEvent('edit', '1')">
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

          </div>
        </Panel>


        <Panel name="2">
          美国高考
          <div slot="content" style="overflow:hidden">
            <Divider class="black" />
            <div @click="cardEvent('add', '2')">
              <Card class="card card-add margin-10 fl" :bordered="false">
                <Icon type="md-add" size="110" color="#ccc" />
                <h2 style="color:#ccc">添加成绩</h2>
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

          </div>
        </Panel>


        <Panel name="3">
          单项考试
          <div slot="content" style="overflow:hidden">
            <Divider class="black" />
            <div @click="cardEvent('add', '3')">
              <Card class="card card-add margin-10 fl" :bordered="false">
                <Icon type="md-add" size="110" color="#ccc" />
                <h2 style="color:#ccc">添加成绩</h2>
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
          </div>
        </Panel>

        <Panel name="4">
          学位体系
          <div slot="content" style="overflow:hidden">
            <Divider class="black" />
            <div @click="cardEvent('add', '')">
              <Card class="card card-add margin-10 fl" :bordered="false">
                <Icon type="md-add" size="110" color="#ccc" />
                <h2 style="color:#ccc">添加成绩</h2>
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

          </div>
        </Panel>
      </Collapse>

    </div>

    <float-layer v-bind:title="title" v-bind:display="foldDisplayFlag" v-on:close="doSomething">
      <Form :model="formData" label-position="right" :label-width="80" style="margin:20px;">
        <FormItem label="Name">
          <Input v-model="formData.input1" />
        </FormItem>
        <FormItem label="Age">
          <Input v-model="formData.input2" />
        </FormItem>
        <FormItem label="Job">
          <Input v-model="formData.input3" />
        </FormItem>
        <FormItem label="Date">
          <Row>
            <Col span="11">
            <FormItem prop="date">
              <DatePicker type="date" placeholder="Select date" v-model="formData.date"></DatePicker>
            </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="Gender" prop="gender">
          <RadioGroup v-model="formData.gender">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Switch">
          <i-switch v-model="formData.switch" size="large">
            <span slot="open">On</span>
            <span slot="close">Off</span>
          </i-switch>
        </FormItem>
        <FormItem label="Slider">
          <Slider v-model="formData.slider" range></Slider>
        </FormItem>
        <FormItem label="Text">
          <Input v-model="formData.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." />
        </FormItem>
        <FormItem>
          <Button type="primary">Submit</Button>
          <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
      </Form>
    </float-layer>

  </div>
</template>

<script>
  import floatLayer from "../../../components/FloatLayer";
  export default {
    data() {
      return {
        formData: {
          slider: [20, 50],
        },
        foldDisplayFlag: false,
        title: "",
        arr: [1],
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
      doSomething() {
        this.foldDisplayFlag = false;
      },
      cardEvent(type, id) {
        let title = '';
        switch (+id) {
          case 1:
            title = '英语能力';
            break;
          case 2:
            title = '美国高考';
            break;
          case 3:
            title = '单项考试';
            break;
          case 4:
            title = '学位体系';
            break;
        }
        this.foldDisplayFlag = true;
        this.title = title;
      }
    },
    components: {
      'float-layer': floatLayer
    }
  };
</script>


<style lang="less">
  .ivu-collapse-content {
    background: none;
  }

  .ivu-collapse {
    background: none;
    border: none;
  }

  .black {
    background: #ddd;
    margin: 10px 0;
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
