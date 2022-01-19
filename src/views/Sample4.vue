<template>
  <div>
    <h4>클릭하면 1이 증가하는 예제</h4>
    <p>{{ count }}</p>
    <button v-on:click="countUp">1씩증가</button>
    <hr />
    <h4>클릭하면 두번째는 누를 수 없게 되는 '좋아' 버튼 예제</h4>
    <button value="good" v-bind:disabled="isClick" v-on:click="oneClick">
      좋아
    </button>
    <hr />
    <h4>클릭하면 지정된 값만큼 증가시키는 예제</h4>
    <p>{{ count3 }}</p>
    <button v-on:click="countUp3(3)">3증가</button>
    <button v-on:click="countUp3(10)">10증가</button>
    <button v-on:click="countUp3(100)">100증가</button>
    <hr />
    <h4>enter 키를 누르면 alert을 표시하는 예제</h4>
    <input v-on:keyup.enter="showAlert" v-model="myText" />
    <p>{{ myText }}</p>
    <hr />
    <h4>shift + enter 키를 누르면 얼럿을 표시하는 예제</h4>
    <input v-on:keyup.enter.shift="showAlert" v-model="myText" />
    <p>{{ myText }}</p>
  </div>
</template>

<script>
function good() {
  alert("좋아");
}

export default {
  name: "Vue2SampleAppSample4",

  data() {
    return {
      count: 0,
      isClick: false,
      count3: 0,
      myText: "Hello",
    };
  },

  mounted() {},

  methods: {
    countUp: function () {
      this.count++;
    },
    oneClick: function () {
      this.isClick = true;
      good();
    },
    countUp3: function (value) {
      this.count3 += value;
    },
    showAlert: function () {
      alert("enter키를 눌렀습니다.");
    },
  },
};
</script>

<style lang="scss" scoped></style>
