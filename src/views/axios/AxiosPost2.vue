<template>
  <h2>Axios : 포스트 방식 예제</h2>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      
    };
  },
  mounted() {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      userId: '1',
      title: '타이틀',
      body: '바디 부분'
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.posts = res.data;
    });
  }
};
</script>

<style scoped></style>
