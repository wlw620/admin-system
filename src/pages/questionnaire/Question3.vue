<template>
  <Form :model="questionInfo" label-position="top">
    <FormItem :label="$t('question.label3Text1')">
      <RadioGroup v-model="questionInfo.direction">
        <Radio class="margin-l-10 margin-r-20" :label="$t('question.radio3Text1')"></Radio>
        <Radio class="margin-l-10 margin-r-20" :label="$t('question.radio3Text2')"></Radio>
        <Radio :label="$t('question.radio3Text3')"></Radio>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('question.label3Text2')">
      <Input v-model="questionInfo.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <h4 class="margin-t-20 margin-b-20">{{$t('question.label3Text3')}}</h4>
    <FormItem :label="$t('question.label3Text4') + 1">
      <Input v-model="questionInfo.input1" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text4') + 2">
      <Input v-model="questionInfo.input1" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text4') + 3">
      <Input v-model="questionInfo.input1" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text5')">
      <Input v-model="questionInfo.input1" placeholder="" />
    </FormItem>
    <h4 class="margin-t-20 margin-b-20">{{$t('question.label3Text6')}}</h4>

    <FormItem :label="$t('question.label3Text7') + 1">
      <Input v-model="questionInfo.input1" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text7') + 2">
      <Input v-model="questionInfo.input1" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text5')">
      <Input v-model="questionInfo.input1" placeholder="" />
    </FormItem>
    <FormItem :label="$t('question.label3Text8') + 2">
      <Input v-model="questionInfo.textarea1" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      questionInfo: {
        direction: "",
        input1: "",
        input2: "",
        input3: ""
      }
    };
  },
  methods: {}
};
</script>
