<template>
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.id }} {{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.$axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      this.posts = response.data;
      console.log(response);
    })
  },
};
</script>

<style scoped></style>