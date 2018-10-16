<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('question.chinesename')" prop="empty" required>
      <Input v-model="form.chinesename"></Input>
    </FormItem>
    <FormItem :label="$t('question.gender')">
      <RadioGroup v-model="form.gender">
        <Radio class="margin-l-10 margin-r-20" :label="$t('question.male')"></Radio>
        <Radio :label="$t('question.female')"></Radio>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('question.birthday')" prop="empty" required>
      <Input v-model="form.birthday"></Input>
    </FormItem>
    <FormItem :label="$t('question.wechat')" prop="empty" required>
      <Input v-model="form.wechat"></Input>
    </FormItem>
    <FormItem :label="$t('question.email')" prop="empty" required>
      <Input v-model="form.email"></Input>
    </FormItem>
    <FormItem :label="$t('question.phone')" prop="empty" required>
      <Input v-model="form.phone"></Input>
    </FormItem>
  </Form>
</template>
<script>
const defaultValidate = {
  required: true,
  message: "不能为空",
  trigger: "blur"
};

export default {
  data() {
    return {
      form: {
        chinesename: "",
        gender: "",
        birthday: "",
        wechat: "",
        email: "",
        phone: ""
      },
      ruleValidate: {
        empty: [defaultValidate]
      }
    };
  },
  methods: {}
};
</script>
