<template>
  <div class="comp comp-tcolor">
    <p class="comp-name">Second Component</p>
    <p>props : {{ name }}</p>

    <third-component :name="name"></third-component>
  </div>
</template>

<script>
import ThirdComponent from './ThirdComponent.vue';

export default {
  components: {ThirdComponent},
  props: {
    name: String
  }
}
</script>

<style>
.inject-text {
  font-weight: bold;
}

.inject-value {
  color: red;
}
</style>