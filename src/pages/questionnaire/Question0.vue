<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('question.chinesename')" prop="chinesename">
      <Input v-model="form.chinesename"></Input>
    </FormItem>
    <FormItem :label="$t('question.gender')">
      <RadioGroup v-model="form.gender">
        <Radio label="male" class="margin-l-10 margin-r-20">
          <span>{{$t('question.male')}}</span>
        </Radio>
        <Radio label="female">
          <span>{{$t('question.female')}}</span>
        </Radio>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('question.birthday')" prop="birthday">
      <Input v-model="form.birthday"></Input>
    </FormItem>
    <FormItem :label="$t('question.wechat')" prop="wechat">
      <Input v-model="form.wechat"></Input>
    </FormItem>
    <FormItem :label="$t('question.email')" prop="email">
      <Input v-model="form.email"></Input>
    </FormItem>
    <FormItem :label="$t('question.phone')" prop="phone">
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
        gender: "male",
        birthday: "",
        wechat: "",
        email: "",
        phone: ""
      },
      ruleValidate: {
        chinesename: [defaultValidate],
        birthday: [defaultValidate],
        wechat: [defaultValidate],
        email: [defaultValidate],
        phone: [defaultValidate]
      }
    };
  },
  methods: {
    getCurrentPageFormDara() {
      return this.validate("form");
    },
    validate(name) {
      return new Promise((resolve, reject) => {
        this.$refs[name].validate(valid => {
          if (valid) {
            console.error("SCUU");
            return resolve(this.form);
          } else {
            console.error("ERROR");
            return reject();
          }
        });
      });
    }
  }
};
</script>
