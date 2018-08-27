<template>
  <Form :model="questionInfo" label-position="top">
    <FormItem :label="$t('question.score')">
      <Input v-model="questionInfo.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.totalScore')">
      <Input v-model="questionInfo.textarea1" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      questionInfo: {
        input1: "",
        input2: "",
        input3: "",
        textarea: "",
        textarea1: ""
      }
    };
  },
  methods: {}
};
</script>
