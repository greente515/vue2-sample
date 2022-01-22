<template>
  <div>
    <textarea v-model="input"></textarea>
    <div v-html="convertMarkdown"></div>
  </div>
</template>

<script src="https://cdnjs.cludflare.com/ajax/libs/marked/0.4.0/marked.min.js"></script>
<script>
export default {
  name: "Vue2SampleAppMarkdowneditor",

  data() {
    return {
      input: "",
    };
  },
  computed: {
    //input이 변하면 convertMarkdown 실행
    convertMarkdown() {
      //markdown script 오류 - 확인 필요
      return marked(this.input);
    },
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
