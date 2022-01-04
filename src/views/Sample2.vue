<template>
  <div>
    <h4>이미지를 지정하는 예제</h4>
    <img src="../assets/logo.png" alt="" />직접지정 <br />
    <img :src="fileName" alt="" />v-bind 지정 <br />
    <h4>링크를 지정하는 예제</h4>
    <a href="https://roadboo.co.kr" target="_blank">링크 직접 지정</a><br />
    <a :href="myURL" target="_blank">v-bind로 링크 지정</a><br />
    <h4>align 지정 예저</h4>
    <p align="right">우측정렬 직접 지정</p>
    <p :align="myAlign">우측정렬 v-bind로 지정</p>
    <h4>인라인 지정 예제</h4>
    <p style="color: #e80">문자색 직접 지정</p>
    <p :style="{ color: myColor }">v-bind로 문자색 지정</p>
    <p style="font-size: 200%">글자 크기 직접 지정</p>
    <p :style="{ fontSize: mySize }">v-bind로 글자크기 지정</p>
    <p style="background-color: aqua">배경색 직접 지정</p>
    <p :style="{ backgroundColor: myBackColor }">v-bind로 배경색 직접 지정</p>
    <h4>클래스 지정 예제</h4>
    <p class="strike-through">직접 클래스 지정</p>
    <p :class="myClass">v-bind로 클래스 지정</p>
    <p :class="[myClass, darkClass]">v-bind로 복수의 클래스 지정</p>
    <p :class="{ 'strike-through': isON }">데이터로 클래스 ON/OFF</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileName: "../assets/logo.png",
      myURL: "https://roadbook.co.kr/",
      myAlign: "right",
      myColor: "#E08000",
      mySize: "200%",
      myBackColor: "aqua",
      myClass: "strike-through",
      darkClass: "dark",
      isON: true,
    };
  },
};
</script>

<style>
.strike-through {
  text-decoration: line-through;
  color: lightgray;
}
.dark {
  background-color: gray;
}
</style>
