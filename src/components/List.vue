<script>
import { defineComponent } from 'vue';
import Scichart2d from './Chart.vue';

// const apiLimit = 1000;
// const apiDateFrom = '2010-01-01';
// const apiType = 'trades';

// const api = {
//   url: 'https://rest.statica.pl/rest/stockquotes/gpw:PLKGHM000017',
//   query: `type=${apiType}&dt_from=${apiDateFrom}&limit=${apiLimit}`,
// };

export default defineComponent({
  name: 'App',
  components: {
    Scichart2d,
  },
  // data() {
  //   return {
  //     chartData: [],
  //   };
  // },
  // mounted() {
  //   fetch(`${api.url}?${api.query}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Basic ${btoa(`frontend2024:test`)}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => (this.chartData = data));
  // },
});

// export default {
//   data() {
//     return {
//       chartData: [],
//     };
//   },
//   mounted() {
//     fetch(`${api.url}?${api.query}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Basic ${btoa(`frontend2024:test`)}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => (this.chartData = data));
//   },
// };
</script>

<template>
  <Scichart2d msg="2D Charts" />
  <!-- <ul>
    <li v-for="item in this.chartData" :key="item.id">
      price: {{ item.price }} amount: {{ item.amount }}
    </li>
  </ul> -->
</template>

<style scoped></style>
