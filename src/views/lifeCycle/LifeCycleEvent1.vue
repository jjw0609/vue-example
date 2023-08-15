<template>
  <input type="text" @keydown.tab.prevent="callTab" />
  <p></p>
</template>

<script>
export default {
  components: [],
  data() {
    return {
      sampleData: ''
    }
  },
  beforeCreate() {
    console.log('beforeCreate() ..')
  },
  created() {
    console.log('created() ..')
  },
  beforeMount() {
    console.log('beforeMount() ..')
  },
  mounted() {
    console.log('mounted() ..')
  },
  beforeUpdate() {
    console.log('beforeUpdate() ..')
  },
  updated() {
    console.log('updated() ..')
  },
  beforeUnmount() {
    console.log('beforeUnmount() ..')
  },
  unmounted() {
    console.log('unmounted() ..')
  },
  methods: {
    callTab() {
      console.log('tab event')
    }
  }
}
</script>

<style scoped></style>
