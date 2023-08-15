<template>
  <div>
    <h1>full name : {{ fullName }}</h1>
    <button type="button" @click="changeName">변경</button>
    <button type="button" @click="changeLastName">라스트 이름 변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "길동",
      lastName: "홍",
      fullName: ''
    };
  },
  methods: {
    changeName() {
      this.firstName = 'Soooooooooooooo';
    },
    changeLastName() {
        this.lastName = 'Son';
    },
  }, watch : {
    firstName() {
      alert('변경감지 퍼스트네임');
      this.fullName = this.firstName + '' + this.lastName;
    },
    lastName() {
      alert('변경감지 라스트네임');

    }
  }
};
</script>

<style scoped></style>