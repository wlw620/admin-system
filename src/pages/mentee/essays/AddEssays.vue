<template>
  <Form :label-width="50">
    <FormItem label="类型" prop="type">
      <Select v-model="formData.type" placeholder="type">
        <Option value="ps">PS</Option>
        <Option value="supplement">Supplement</Option>
        <Option value="transfer">Tranfer</Option>
        <Option value="summerschool">Summer</Option>
        <Option value="others">Other</Option>
      </Select>
    </FormItem>
    <FormItem label="主题" prop="type">
      <Input v-if="formData.type==='Other'" v-model="formData.topic" placeholder/>
      <Input v-else v-model="formData.topic" placeholder="不可修改，读库"/>
    </FormItem>
    <FormItem label="标题" prop="type">
      <Input v-model="formData.title" placeholder="Enter something..."/>
    </FormItem>
    <FormItem label="描述" prop="type">
      <Input
        v-model="formData.description"
        type="textarea"
        :autosize="{minRows: 4, maxRows: 7}"
        placeholder="Enter something..."
      />
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        type: "",
        topic: "",
        title: "",
        description: ""
      }
    };
  },
  methods:{
    reset() {
      let _formData = {
        type: "",
        topic: "",
        title: "",
        description: ""
      };
      this.formData = _formData;
    }
  }
};
</script>
