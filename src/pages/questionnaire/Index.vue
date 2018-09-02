<template>
  <div class="container-box question-container">
    <Card class="padding-20">
      <Steps :current="current" :status="status">
        <Step title="基本信息" content=""></Step>
        <Step title="教育背景" content=""></Step>
        <Step title="学术背景" content=""></Step>
        <Step title="专业背景" content=""></Step>
        <Step title="申请相关" content=""></Step>
        <Step title="个人相关" content=""></Step>
        <Step title="关于我们" content=""></Step>
      </Steps>

      <div class="padding-30">
        <router-view></router-view>
      </div>
      <div class="t-center">
        <Button type="primary" @click="nextStep">下一步</Button>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "wait",
      current: 0,
      maxStep: 6,
      steps: [
        "/questionnaire",
        "/step1",
        "/step2",
        "/step3",
        "/step4",
        "/step5",
        "/step6"
      ]
    };
  },
  methods: {
    nextStep() {
      if (this.current < this.maxStep) {
        this.current++;
        this.$router.push({ path: this.steps[this.current] });
        this.$set(this, "current", this.current);
      }
    },
    rest() {
      this.$router.push({ path: this.steps[0] });
      this.$set(this, "current", 0);
    }
  },
  watch: {
    '$route'(route) {
      this.$set(this, "current", this.steps.indexOf(route.path));
    }
  },
  mounted() {
    this.rest();
  }
};
</script>

<style lang="less">
</style>
