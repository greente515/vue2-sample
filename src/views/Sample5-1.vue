<template>
  <div>
    <h4>true 일때만 표시하는 예제</h4>
    <label> <input type="checkbox" v-model="myVisible" /> 표시 </label>
    <p v-if="myVisible">체크박스가 on</p>
    <hr />
    <h4>true 와 false 를 on/off 로 표시하는 예제</h4>
    <label> <input type="checkbox" v-model="myVisible2" /> 표시 </label>
    <p v-if="myVisible2">체크박스 on</p>
    <p v-else>체크박스 off</p>
    <hr />
    <h4>클릭하면 '좋아' 버튼을 삭제하는 예제</h4>
    <button v-if="isShow" v-on:click="good">좋아</button>
    <hr />
    <h4>배열 데이터를 리스트로 표시하는 예제</h4>
    <ul>
      <li v-for="item in myArray" :key="item.index">{{ item }}</li>
    </ul>
    <hr />
    <h4>오브젝트 배열 데이터를 리스트로 표시하는 예제</h4>
    <ul>
      <li v-for="item in objArray" :key="item.index">
        {{ item.name }} , {{ item.price }}
      </li>
    </ul>
    <hr />
    <h4>1x5 ~ 10x5 를 반복 표시하는 예제</h4>
    <ul>
      <li v-for="n in 10" :key="n">{{ n }}x5={{ n * 5 }}</li>
    </ul>
    <hr />
    <h4>배열 데이터를 번호가 붙어 있는 리스트로 표시하는 예제</h4>
    <ul>
      <li v-for="(item, index) in myArray2" :key="index">
        {{ index }} : {{ item }}
      </li>
    </ul>
    <hr />
    <h4>배열 데이터를 테이블로 표시하는 예제</h4>
    <h3>관심받고 있는 언어 랭킹</h3>
    <table>
      <thead>
        <!-- 테이블 헤더 반복 -->
        <th v-for="item in header" :key="item.index">{{ item }}</th>
      </thead>
      <tbody>
        <!-- 1행 반복 -->
        <tr v-for="line in ranking" :key="line.index">
          <!-- 1데이터 반복 -->
          <td v-for="item in line" :key="item.index">{{ item }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Vue2SampleAppSample51",

  data() {
    return {
      myVisible: false,
      myVisible2: false,
      isShow: true,
      myArray: ["찜빵", "멜론빵", "크로와상"],
      objArray: [
        { name: "찜빵", price: 1000 },
        { name: "멜론빵", price: 1200 },
        { name: "크로와상", price: 1500 },
      ],
      myArray2: ["찜빵", "멜론빵", "크로와상", "슈크림빵"],
      header: ["프로그램언어", 2018, 2013, 2008, 2003, 1998],
      ranking: [
        ["Java", 1, 2, 1, 1, 16],
        ["C", 2, 1, 2, 2, 1],
        ["C++", 3, 4, 3, 3, 2],
        ["Python", 4, 7, 6, 11, 23],
        ["JavaScript", 7, 10, 8, 7, 20],
      ],
    };
  },

  mounted() {},

  methods: {
    good: function () {
      this.isShow = false;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  text-align: left;
}
table th {
  padding: 12px;
  border-bottom: 2px solid darkgray;
}
table td {
  padding: 12px;
}
table tr:nth-of-type(even) {
  background-color: rgba(0, 0, 255, 0.1);
}
</style>
