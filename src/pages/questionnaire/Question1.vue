<template>
<div> {{id}}

  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('form.schoolName')">
      <Input v-model="form.schoolName"></Input>
    </FormItem>
    <FormItem :label="$t('form.schoolType')" prop="gender">
      <Select v-model="form.schoolType">
        <Option v-for="item in schoolTyps" :value="item.key" :key="item.key">{{ item.value }}</Option>
      </Select>
    </FormItem>
    <FormItem :label="$t('form.schoolBatch')">
      <Select v-model="form.schoolBatch">
        <Option v-for="item in schoolBatch" :value="item.key" :key="item.key">{{ item.value }}</Option>
      </Select>
    </FormItem>
  </Form>
  </div>
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
      schoolTyps: [
        {
          key: "国内普高",
          value: "1"
        }
      ],
      schoolBatch: [
        {
          key: "2016",
          value: "2016"
        }
      ],
      form: {
        schoolType: "",
        input1: "",
        input2: "",
        input3: ""
      },
      ruleValidate: {
        empty: [defaultValidate]
      }
    };
  },
  methods: {}
};
</script>
