<template>
  <div class="text">
    <h4>데이터를 v-text로 표시하는 예제</h4>
    <p v-text="myText"></p>
    <p>{{ myText }}</p>
    <hr />
    <h4>HTML로 표시하는 예제</h4>
    <p v-html="myText"></p>
    <hr />
    <h4>여러가지 데이터형을 표시하는 예제</h4>
    <p>{{ myNumber }}</p>
    <p>{{ myText }}</p>
    <p>{{ myBool }}</p>
    <hr />
    <h4>JavaScript를 이용하여 표시하는 예제</h4>
    <p>{{ myPrice * 1.08 }}</p>
    <p>{{ "Hi" + myText }}</p>
    <p>{{ myText.substr(0.1) }}</p>
    <hr />
    <h4>배열로 값을 표시하는 예제</h4>
    <p>{{ myArray }}</p>
    <p>{{ myArray[0] }}</p>
    <hr />
    <h4>오브젝트 데이터를 표시하는 예제</h4>
    <p>{{ myObject }}</p>
    <p>{{ myObject.name }} {{ myObject.price }}</p>
    <hr />
    <h4>
      미리 준비한 데이터 사용하기(javascript로 만든 데이터를 표시하는 예제)
    </h4>
    <p>{{ myTea }}</p>
    <p>{{ myTea[1].name }} {{ myTea[1].price }}</p>
    <hr />
    <h4>
      데이터의 내부를 확인하고 싶을 때 (오브젝트 데이터의 내부를 확인하는 예제)
    </h4>
    <!-- <p>{{ $data }}</p> -->
    <!-- <hr /> -->
    <!-- <li v-for="(item, key) in $data" :key="item">{{ key }} : {{ item }}</li> -->
  </div>
</template>

<script>
var teaList = [
  { name: "다즐링", price: 600 },
  { name: "얼그레이", price: 500 },
  { name: "실론", price: 700 },
];
export default {
  data() {
    return {
      myText: "Hello",
      myNumber: 12345,
      myBool: true,
      myPrice: 500,
      myArray: ["다즐링", "얼그레이", "실론"],
      myObject: { name: "다즐링", price: 600 },
      myTea: teaList,
    };
  },
};
</script>

<style></style>
