<script>
import { defineComponent } from 'vue';
import Scichart2d from './components/Chart.vue';

export default defineComponent({
  name: 'App',
  components: {
    Scichart2d,
  },
});
</script>

<template>
  <Scichart2d />
</template>

<style scoped></style>
