<template>
  <Form :label-width="50">
    <FormItem label="类型" prop="type" >
      <Select v-model="formData.type" placeholder="type">
        <Option value="beijing">New York</Option>
        <Option value="shanghai">London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
    </FormItem>
    <FormItem label="类型1" prop="type">
      <Select v-model="formData.pic" placeholder="type">
        <Option value="beijing">New York</Option>
        <Option value="shanghai">London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
    </FormItem>
    <FormItem label="文案" prop="type">
      <Input v-model="formData.text" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem label="描述" prop="type">
      <Input v-model="formData.text" type="textarea" :autosize="{minRows: 4,maxRows: 7}" placeholder="Enter something..."></Input>
    </FormItem>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        type: "",
        pic: "",
        text: ""
      }
    };
  }
};
</script>
