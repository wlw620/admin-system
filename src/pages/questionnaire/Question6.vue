<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('question.label6Text1')">
      <Input v-model="form.service" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.label6Text2')">
      <Input v-model="form.method" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.label6Text3')">
      <Input v-model="form.mentor_preference" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.label6Text4')">
      <Input v-model="form.supp" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      ruleValidate: {},
      form: {
        service: "",
        method: "",
        mentor_preference: "",
        supp: ""
      }
    };
  },
  methods: {
    getCurrentPageFormDara() {
      return this.validate("form");
    },
    validate(name) {
      return new Promise((resolve, reject) => {
        resolve(this.form);
      });

      // return new Promise((resolve, reject) => {
      //   this.$refs[name].validate(valid => {
      //     if (valid) {
      //       resolve();
      //     } else {
      //       reject();
      //     }
      //   });
      // });
    }
  }
};
</script>
