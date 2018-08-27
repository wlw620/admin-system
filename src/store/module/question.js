let steps = ["/questionnaire", "/step1", "/step2", "/step3", "/step4", "/step5", "/step6"];

export default {
  state: {
    num: 0,
    curStep: '/questionnaire'
  },
  getters: {

  },
  mutations: {
    nexStep(state) {
      if (state.num < steps.length) {
        state.num++;
        state.curStep = steps[state.num];
      }
    },
    prevStep(state) {
      if (state.num > 0) {
        state.num--;
        state.curStep = steps[state.num];
      }
    }
  }
}
