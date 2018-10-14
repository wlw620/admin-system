<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('question.name')">
      <Input v-model="form.input1"></Input>
    </FormItem>
    <FormItem :label="$t('question.sex')" prop="gender">
      <RadioGroup v-model="form.sex">
        <Radio class="margin-l-10 margin-r-20" :label="$t('question.male')"></Radio>
        <Radio :label="$t('question.female')"></Radio>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('question.sex')">
      <Input v-model="form.input2"></Input>
    </FormItem>
    <FormItem :label="$t('question.birthday')">
      <Input v-model="form.input3"></Input>
    </FormItem>
    <FormItem :label="$t('question.wx')">
      <Input v-model="form.input3"></Input>
    </FormItem>
    <FormItem :label="$t('question.email')">
      <Input v-model="form.input3"></Input>
    </FormItem>
    <FormItem :label="$t('question.phone')">
      <Input v-model="form.input3"></Input>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        input1: "",
        input2: "",
        input3: ""
      }
    };
  },
  methods: {}
};
</script>
