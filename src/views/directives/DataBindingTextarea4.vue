<template>
  <div>
    <textarea v-model="message"></textarea>
    <div>{{ message }}</div>
  </div>
</template>

<script>
// 주의
//  바인딩시 주의 :  <textarea>{{ message }}</textarea> 이렇게는 안됨
export default {
  data() {
    return {
      message: "여러줄을 입력 할수 있는 textarea 입니다.",
    };
  },
};
</script>

<style scoped></style>
