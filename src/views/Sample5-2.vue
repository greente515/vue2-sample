<template>
  <div>
    <h4>버튼으로 리스트에 추가/삭제 예제</h4>
    <ul>
      <li v-for="item in addArray" :key="item.index">{{ item }}</li>
    </ul>
    <button v-on:click="addLast">맨 뒤에 추가</button>
    <button v-on:click="addObj(3)">네번째에 추가</button>
    <button v-on:click="changeObj(0)">첫번째를 변경</button>
    <button v-on:click="deleteObj(1)">두번째를 삭제</button>
    <hr />
    <h4>버튼을 클릭하면 소트하는 예제</h4>
    <ul>
      <li v-for="item in myArray" :key="item.index">{{ item }}</li>
    </ul>
    <button v-on:click="sortData(myArray)">소트</button>
    <hr />
    <h4>짝수만 표시하는 예제</h4>
    <ul>
      <div v-for="item in evenArray" :key="item">
        <li v-if="item % 2 == 0">{{ item }}</li>
      </div>
    </ul>
    <hr />
    <h4>버튼을 클릭하면 짝수만 표시하는 예제</h4>
    <ul>
      <li v-for="item in evenArray" :key="item">{{ item }}</li>
    </ul>
    <button v-on:click="evenData()">짝수만 표시</button>
  </div>
</template>

<script>
export default {
  name: "Vue2SampleAppSample52",

  data() {
    return {
      addArray: ["첫번째", "두번째", "세번째", "네번째", "다섯번째"],
      myArray: ["one", "two", "three", "four", "five"],
      evenArray: [1, 2, 3, 4, 5, 6],
    };
  },

  mounted() {},

  methods: {
    addLast: function () {
      this.addArray.push("[맨 뒤에 추가]"); //array.push(추가데이터)
    },
    addObj: function (index) {
      this.addArray.splice(index, 0, "[추가]"); //array.splice(지정위치, 0, 추가데이터)
    },
    changeObj: function (index) {
      this.addArray.splice(index, 1, "[변경]"); //array.splice(위치, 1, 변화데이터)
    },
    deleteObj: function (index) {
      this.addArray.splice(index, 1); //array.splice(지정위치, 1)
    },
    sortData: function (listdata) {
      listdata.sort(function (a, b) {
        return a < b ? -1 : 1;
      });
    },
    evenData() {
      this.evenArray = this.evenArray.filter((value) => {
        return value % 2 == 0;
      });
      // 아래 내용을 위 화살표 함수로 변경
      //   this.evenArray = this.evenArray.filter(function (value) {
      //     return value % 2 == 0;
      //   });
    },
  },
};
</script>

<style scoped></style>
