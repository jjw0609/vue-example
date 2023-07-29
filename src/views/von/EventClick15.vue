<template>
  <div>
    <button type="button" @click="one">클릭이벤트</button>
  </div>
  <hr>
  <!-- 여러 개의 함수를 호출하고 싶을 때 -->
  <button type="button" @click="two">여러개 함수 호출하고</button>
  <hr>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The counter is : {{ counter }}</p>
  </div>

  <hr />
  <!-- 파라미터 전달하고 싶을 때 -->
  <div>
    <button type="button" @click="setCount(7)">Set 7</button>
    <p>카운트는 : {{ count }}</p>
  </div>
</template>

<script>
//클릭 이벤트
//v-on:click 또는 @click="메소드명"
export default {
  data() {
    return {
      counter: 0,
      count: 0
    };
  },

  methods: {
    setCount(count) {
      this.count = count;
    },
    increaseCounter() {
      this.counter = this.counter + 1;
    },
    one() {
      alert('1 입니다.');
    },
    two() {
      alert('2 입니다.');
    }
  }
};
</script>

<style scoped></style>
