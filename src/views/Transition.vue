<template>
  <div>
    <h4>체크박스로 표시/비표시에 애니메이션 효과를 주는 예제</h4>
    <label><input type="checkbox" v-model="isOK" />변경</label>
    <transition>
      <p v-if="isOK">표시/비표시의 애니메이션</p>
    </transition>
    <hr />
    <h4>버튼을 누르면 리스트가 증감할 때 애니메이션 효과를 주는 예제</h4>
    <ul>
      <transition-group>
        <li v-for="item in dataArray" :key="item">{{ item }}</li>
      </transition-group>
    </ul>
    <label>
      <input v-model="addItem" placeholder="추가할 리스트" />
    </label>
    <button @click="addList">추가</button><br />
    <button @click="removeLast">맨 뒤 1개 삭제</button>
    <hr />
    <h4>클릭하면 셔플하는 예제</h4>
    <button @click="shuffleData()">셔플</button>
    <hr />
    <h4>리스트의 순서가 이동하면서 변하는 애니메이션 예제</h4>
    <ul>
      <transition-group>
        <li v-for="item in suffleArray" :key="item">{{ item }}</li>
      </transition-group>
    </ul>
    <button @click="sortData2">소트</button>
    <button @click="shuffleData2">셔플</button>
  </div>
</template>

<script>
export default {
  name: "Vue2SampleAppTransition",

  data() {
    return {
      isOK: false,
      dataArray: ["벚꽃", "산수유", "진달래", "철쭉"],
      addItem: "",
      suffleArray: ["one", "two", "three", "four", "five"],
    };
  },

  mounted() {},

  methods: {
    addList() {
      this.dataArray.push(this.addItem);
      this.addItem = "";
    },
    removeLast() {
      let lastIdx = this.dataArray.length - 1;
      this.dataArray.splice(lastIdx, 1);
    },
    shuffleData() {
      //임시로 저장할 배열 공간을 준비
      let buffer = [];
      //원본 배열의 개수
      let len = this.suffleArray.length;
      //원래 배열을 감소해가면서 반복, i는 그 시점에서의 개수
      // eslint-disable-next-line no-unused-vars
      for (var i = len; len > 0; len--) {
        //r은 랜덤수를 뽑아 개수를 곱한 후 소수점을 제거한 값
        let r = Math.floor(Math.random() * len);
        //원본 배열에서 랜덤으로 하나씩 뽑아서 임시 배열에 추가
        buffer.push(this.suffleArray[r]);
        //원본 배열에서 랜덤으로 하나씩 삭제
        this.suffleArray.splice(r, 1);
      }
      //임시 배열을 원본 배열에 입력
      this.suffleArray = buffer;
      //셔플 내용 확인
      alert(this.suffleArray);
    },
    sortData2() {
      this.suffleArray.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
    },
    shuffleData2() {
      let buffer = [];
      let len = this.suffleArray.length;
      // eslint-disable-next-line no-unused-vars
      for (var i = len; len > 0; len--) {
        let r = Math.floor(Math.random() * len);
        buffer.push(this.suffleArray[r]);
        this.suffleArray.splice(r, 1);
      }
      this.suffleArray = buffer;
    },
  },
};
</script>

<style scoped>
/* 나타나고 있을 때와 사라질 떄는 0.5초*/
.v-enter-active,
.v-leave-active {
  transition: 0.5s;
}
/* 나타나기 전의 상태와 사라진 상태는 투명도가 0, 밑으로 20 이동 */
.v-enter,
.v-leave-to {
  opacity: 0;
  /* transform: translateY(20px); */ /* 체크박스로 표시/비표시 */
  transform: translateX(50px); /* 버튼을 누르면 리스트가 증감 */
}
</style>
