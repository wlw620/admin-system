<template>
  <Form label-position="top" :model="form" ref="form" :rules="ruleValidate">
    <FormItem :label="$t('form.schoolName')">
      <Input v-model="questionInfo.input1"></Input>
    </FormItem>
    <FormItem :label="$t('form.schoolType')" prop="gender">
      <Select v-model="questionInfo.schoolType">
        <Option v-for="item in schoolTyps" :value="item.key" :key="item.key">{{ item.value }}</Option>
      </Select>
    </FormItem>
    <FormItem :label="$t('form.schoolBatch')">
      <Select v-model="questionInfo.schoolBatch">
        <Option v-for="item in schoolBatch" :value="item.key" :key="item.key">{{ item.value }}</Option>
      </Select>
    </FormItem>
  </Form>
</template>
<script>
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
      questionInfo: {
        schoolType: "",
        input1: "",
        input2: "",
        input3: ""
      }
    };
  },
  methods: {}
};
</script>
