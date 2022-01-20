<template>
  <div>
    <h4>입력문자를 감지하여 금지문자가 입력되면 얼럿을 띄우는 예제</h4>
    <p>금지문자는 {{ forbiddenText }}</p>
    <textarea v-model="inputText"></textarea>
    <hr />
    <h4>남은 시간이 0초가 되면 얼럿을 띄우는 예제</h4>
    <p>앞으로 {{ restSec }} 초</p>
    <button @click="startTimer">START</button>
    <hr />
    <h4>TweenMax 테스트</h4>
    <button id="movebtn" @click="myMove">이동</button>
    <hr />
    <h4>
      숫자가 빠르게 올라가는 애니메이션을 보여주며 값이 증가하는 input 태그 예제
    </h4>
    <p>값은 {{ animeNumber }} 입니다.</p>
    <input v-model.number="myNumber" type="number" />
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
<script>
export default {
  name: "Vue2SampleAppSample62",

  data() {
    return {
      forbiddenText: "안되",
      inputText: "오늘은 날씨가 좋습니다.",
      restSec: 5,
      timerObj: null,
      x: 0,
      myNumber: 0,
      tweenedNumber: 0,
    };
  },
  watch: {
    inputText() {
      //입력한 문자열을 감지한다.
      let pos = this.inputText.indexOf(this.forbiddenText);
      if (pos >= 0) {
        alert(this.forbiddenText + "는 입력할 수 없습니다.");
        //입력한 문자에서 금지문자를 삭제한다.
        this.inputText = this.inputText.substr(0, pos);
      }
    },
    //남은 초를 감시한다.
    restSec() {
      //0초 이하가 도면 얼럿을 ㄸㅟ우고 타이머를 멈춘다.
      if (this.restSec <= 0) {
        alert("제한시간입니다.");
        clearInterval(this.timerObj);
      }
    },
    //myNumber를 감지하여 값이 변할 경우 실행한다.
    myNumber() {
      //data의 tweenedNumber 프로퍼티를 1초에 myNumber까지 증가시킨다.
      TweenMax.to(this.$data, 1, { tweenedNumber: this.myNumber }); //TweenMax 오류
    },
  },
  computed: {
    //tweendNumber 값이 변경되는 변화중 애니메이션을 산출한다.
    animeNumber() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  mounted() {},

  methods: {
    startTimer() {
      this.restSec = 5; //남은시간 5초
      //타이머를 스티트, 1초(1000미리초)에 1씩 감소
      this.timerObj = setInterval(() => {
        this.restSec--;
      }, 1000);
    },
    myMove() {
      TweenMax.to("#movebtn", 1, { x: "500px" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
