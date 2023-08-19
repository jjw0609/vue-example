<template>
  <div>
    <h2>믹스인을 사용한 예제</h2>
    <input type="text" />
    <div>시간1:{{ $callTime() }}</div>
    <div>시간2:{{ time }}</div>
  </div>
</template>
<script>
//https://hdevstudy.tistory.com/191

// import ApiMixin from '@/mixins/mixins.js'

export default {
  data() {
    return {
      time: ''
    }
  },
  mounted() {
    this.time = this.$callTime()
  }
}
</script>