<template>
  <div>{{ city }}</div>
  <div>
     <select v-model="city">  
      <!--<select onchange="fontSize(this.value)"></select> -->
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주도</option>
      <option value="053">대구</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "064",
    };
  },
};
</script>

<style scoped></style>
