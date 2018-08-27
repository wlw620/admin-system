<template>
  <Form :model="questionInfo" label-position="top">
    <FormItem :label="$t('question.name')">
      <Input v-model="questionInfo.input1"></Input>
    </FormItem>
    <FormItem :label="$t('question.sex')" prop="gender">
      <RadioGroup v-model="questionInfo.sex">
        <Radio class="margin-l-10 margin-r-20" :label="$t('question.male')"></Radio>
        <Radio :label="$t('question.female')"></Radio>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('question.sex')">
      <Input v-model="questionInfo.input2"></Input>
    </FormItem>
    <FormItem :label="$t('question.birthday')">
      <Input v-model="questionInfo.input3"></Input>
    </FormItem>
    <FormItem :label="$t('question.wx')">
      <Input v-model="questionInfo.input3"></Input>
    </FormItem>
    <FormItem :label="$t('question.email')">
      <Input v-model="questionInfo.input3"></Input>
    </FormItem>
    <FormItem :label="$t('question.phone')">
      <Input v-model="questionInfo.input3"></Input>
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
