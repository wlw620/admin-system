<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('question.label6Text1')">
      <Input v-model="questionInfo.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.label6Text2')">
      <Input v-model="questionInfo.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.label6Text3')">
      <Input v-model="questionInfo.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.label6Text4')">
      <Input v-model="questionInfo.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
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
        input3: ""
      }
    };
  },
  methods: {}
};
</script>
