<template>
  <input type="text" v-model="firstName" />
  <div>
    <h1>full name : {{ fullName }}</h1>
    <h1>full name : {{ getFullName() }}</h1>
  </div>
  <hr />
</template>

<script>
export default {
  data() {
    return {
      firstName: "길동",
      lastName: "홍",
    };
  },
  methods: {
    getFullName() {
      console.log("methods 함수 호출");
      return this.firstName + "" + this.lastName;
    },
  },
  computed: {
    fullName() {
      console.log("computed 함수 호출");
      return this.firstName + "" + this.lastName;
    },
  },
};
</script>

<style scoped></style>