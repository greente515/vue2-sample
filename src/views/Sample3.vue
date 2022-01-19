<template>
  <div>
    <h4>입력한 문자열을 표시하는 예제</h4>
    <input v-model="myName" placeholder="name" />
    <p>나는 {{ myName }}</p>
    <hr />
    <h4>입력한 문장과 문자수를 표시하는 예제</h4>
    <textarea v-model="myText"></textarea>
    <p>문장은 {{ myText }}</p>
    <p>문자수는 {{ myText.length }}자</p>
    <hr />
    <h4>체크박스의 ON/OFF를 확인하는 예제</h4>
    <label>
      <input type="checkbox" v-model="myCheck" />체크박스의 상태는
      {{ myCheck }}
    </label>
    <hr />
    <h4>복수 체크박스의 ON을 배열로 만드는 예제</h4>
    <label> <input type="checkbox" value="red" v-model="myChecks" /> 적 </label
    ><br />
    <label>
      <input type="checkbox" value="green" v-model="myChecks" /> 녹 </label
    ><br />
    <label> <input type="checkbox" value="blue" v-model="myChecks" /> 청 </label
    ><br />
    <p>선택한 색은 {{ myChecks }}</p>
    <hr />
    <h4>동의에 체크하면 송신 버튼이 활성화 되는 예제</h4>
    <label><input type="checkbox" v-model="myAgree" />동의</label>
    <button :disabled="!myAgree">송신</button>
    <hr />
    <h4>선택한 라디오 버튼을 표시하는 예제</h4>
    <label><input type="radio" value="red" v-model="picked" />적</label><br />
    <label><input type="radio" value="green" v-model="picked" />녹</label><br />
    <label><input type="radio" value="blue" v-model="picked" />청</label><br />
    <p>{{ picked }} 선택</p>
    <hr />
    <h4>이미지 출력을 라디오버튼으로 변경하는 예제</h4>
    <label
      ><input
        type="radio"
        value="../assets/logo.png"
        v-model="fileName"
      />file1</label
    ><br />
    <label
      ><input
        type="radio"
        value="../assets/logo2.png"
        v-model="fileName"
      />file2</label
    >
    <p>{{ fileName }}</p>
    <img :src="fileName" />
    <hr />
    <h4>문자열이 선택한 색으로 변하는 예제</h4>
    <select v-model="myColor">
      <option disabled value="">색을 선택해 주세요</option>
      <option>red</option>
      <option>green</option>
      <option>blue</option>
      <option>orange</option>
      <option>brown</option>
    </select>
    <p :style="{ color: myColor }">선택한 색상은 {{ myColor }}</p>
    <hr />
    <h4>복수의 선택을 배열로 처리</h4>
    <select v-model="myColor1" multiple style="width: 150px">
      <option>red</option>
      <option>greeen</option>
      <option>blue</option>
      <option>orange</option>
      <option>brown</option>
    </select>
    <p>선택한 색은 {{ myColor1 }} 입니다.</p>
    <hr />
    <h4>다 쓰고 나서 입력하는 에제</h4>
    <input v-model.lazy="myText2" />
    <p>입력 후 표시 {{ myText2 }}</p>
    <hr />
    <h4>입력 후 자동으로 수식으로 변경되는 예제</h4>
    <input v-model.number="myNumber" type="number" />
    <p>100을 더해서 표시 {{ 100 + myNumber }}</p>
    <h4>앞뒤의 공백을 자동으로 제거하는 예제</h4>
    <input v-model.trim="myText" />
    <p>앞 뒤 공백을 제거 {{ myText }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myName: "",
      myText: "오늘 날씨 좋습니다.",
      myCheck: false,
      myChecks: [],
      myAgree: false,
      picked: "red",
      fileName: "",
      myColor: "",
      myColor1: "",
      myText2: "",
      myNumber: 0,
    };
  },
};
</script>

<style></style>
