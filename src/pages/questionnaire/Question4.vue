<template>
  <Form :model="questionInfo" label-position="top">
    <FormItem :label="$t('question.label4Text1')">
      <RadioGroup v-model="questionInfo.direction">
        <Radio class="margin-l-10 margin-r-20" :label="$t('question.radio4Text1')"></Radio>
        <Radio class="margin-l-10 margin-r-20" :label="$t('question.radio4Text2')"></Radio>
        <Radio :label="$t('question.radio4Text3')"></Radio>
      </RadioGroup>
    </FormItem>
    <FormItem :label="$t('question.label4Text2')">
      <Input v-model="questionInfo.textarea" type="textarea" :autosize="{minRows: 3,maxRows: 6}" placeholder="Enter something..."></Input>
    </FormItem>
    <FormItem :label="$t('question.label4Text3') + 1">
      <Input v-model="questionInfo.input3"></Input>
    </FormItem>
    <h4>{{$t('question.label4Text4')}}</h4>
    <p>{{$t('question.label4Text5')}}</p>
    <draggable v-model="list" @start="drag=true" @end="drag=false">
      <div v-for="element in list" :key="element.id">{{element.name}}</div>
    </draggable>

  </Form>
</template>
<script>
import draggable from "vuedraggable";

export default {
  data() {
    return {
      list: [{ id: 1, name: "地理位置" }, { id: 2, name: "学校排名" }],
      questionInfo: {
        input1: "",
        input2: "",
        input3: ""
      }
    };
  },
  components: {
    draggable
  },
  methods: {}
};
</script>
