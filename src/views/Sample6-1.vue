<template>
  <div>
    <h4>금액을 입력하면 소비세가 포함된 금액을 계산하는 예제</h4>
    <input v-model.number="price" type="number" />원
    <p>소비세 포함 금액 {{ taxIncluded }} 원</p>
    <hr />
    <h4>단가와 개수를 입력하면 세금포함 금액을 계산하는 예제</h4>
    <input v-model.number="price2" type="number" />원 X
    <input v-model.number="count2" type="number" />개
    <p>합계 {{ sum }} 원</p>
    <p>세금포함 {{ taxIncluded2 }} 원</p>
    <hr />
    <h4>문장을 입력하면 남은 글자수를 표시하는 예제</h4>
    <p>감상은 140자 이내로 입력해 주세요.</p>
    <textarea v-model="myText"></textarea>
    <p v-bind:style="{ color: computedColor }">
      남은 글자는 {{ remaining }} 입니다.
    </p>
    <hr />
    <h4>문자를 입력하면 그 문자를 포함한 항목만 표시하는 예제</h4>
    <input v-model="findWord" />
    <ul>
      <li v-for="(item, index) in findItems" :key="index">{{ item }}</li>
    </ul>
    <hr />
    <h4>적색, 녹색, 청색의 슬라이더를 움직이면 완성된 색을 표시하는 예제</h4>
    <p :style="{ backgroundColor: mixColor }">{{ mixColor }}</p>
    <input type="range" v-model="R" min="0" max="255" /><br />
    <input type="range" v-model="G" min="0" max="255" /><br />
    <input type="range" v-model="B" min="0" max="255" /><br />
  </div>
</template>

<script>
export default {
  name: "Vue2SampleAppSample6",

  data() {
    return {
      price: 100,
      count2: 1,
      price2: 100,
      myText: "오늘은 날씨가 좋습니다.",
      findWord: "",
      items: ["한라산", "설악산", "백두산", "북한산", "지리산"],
      R: 255,
      G: 150,
      B: 100,
    };
  },
  computed: {
    taxIncluded() {
      //price가 변하면 소비세 금액이 변한다.
      return this.price * 1.08;
    },
    sum() {
      //price 나 count 가 변하면 합계금액을 계산한다.
      return this.price2 * this.count2;
    },
    taxIncluded2() {
      //합계 금액이 변하면 세금포함 금액을 계산한다.
      return this.sum * 1.08;
    },
    remaining() {
      //myText의 길이가 변하면 남은 글자수를 계산한다.
      return 140 - this.myText.length;
    },
    computedColor() {
      let col = "green";
      if (this.remaining < 20) {
        col = "orange";
      }
      if (this.remaining < 1) {
        col = "red";
      }
      return col;
    },
    findItems() {
      //this.findWord 가 변하면 그 문자가 포함된 리스트를 계산한다.
      if (this.findWord) {
        return this.items.filter((value) => {
          return value.indexOf(this.findWord) > -1;
        }, this);
        // return this.items.filter(function (value) {
        //   return (value.indexOf(this.findWord) > -1);
        // }, this);
      } else {
        //this.findWord 가 공백일 땐 리스트를 그대로 반환한다.
        return this.items;
      }
    },
    mixColor() {
      //R,G,B 의 값이 변하면 색을 계산한다.
      let ans = "RGB(" + this.R + "," + this.G + "," + this.B + ")";
      return ans;
    },
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
