<template>
  <slot-child />
</template>

<script>
import SlotChild from './SlotChild.vue';
export default {
  components: {SlotChild}
};
</script>

<style scoped></style>