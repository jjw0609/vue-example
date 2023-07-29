<template>
  <label>   
    <input type="radio" v-bind:value="radioValue1" v-model="picked" />서울

  </label>
  <label>
    <input type="radio" v-bind:value="radioValue2" v-model="picked" />부산
  </label>
  <label>
    <input type="radio" v-bind:value="radioValue3" v-model="picked" />제주
  </label>

  <hr />
  <span>선택한 지역{{ picked }}</span>
</template>

<script>
//v-bind는 html 태그의 속성 앞에 붙여서 변수와 연결 시켜 보겠다. 
//v-bind는 제이쿼리의 attr과 비슷한 역할
// v-model 은 내부적으로 checked 속성과 바인딩이 이루어짐
export default {
  data() {
    return {
      picked: "",
      radioValue1: "서울",
      radioValue2: "부산",
      radioValue3: "제주",
    };
  },
};
</script>

<style scoped></style>
