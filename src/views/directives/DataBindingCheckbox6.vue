<template>
  <div>{{ checked }}</div>
  <div>
    <input type="checkbox" v-model="checked" true-value="남" false-value="여" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style scoped></style>
