<template>
  <div>
    <div id="scichart-root" style="width: 600px; height: 400px; margin: auto"></div>
  </div>
</template>

<script lang="ts">
import {initSciChart} from '../util/initialize-chart'
import { defineComponent } from "vue";

const apiLimit = 1000;
const apiDateFrom = '2010-01-01';
const apiType = 'trades';

const api = {
  url: 'https://rest.statica.pl/rest/stockquotes/gpw:PLKGHM000017',
  query: `type=${apiType}&dt_from=${apiDateFrom}&limit=${apiLimit}`,
};

export default defineComponent({
    name: "scichart2d",

    data() {
    return {
      prices: [],
      amounts: []
    };
  },

  mounted() {
    fetch(`${api.url}?${api.query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`frontend2024:test`)}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
         this.chartData = data
         const prices = data.map(data => data.price)
         const amounts = data.map(data => data.amount)
         const time = data.map(data => data.dt)
        this.chartInitializationPromise = initSciChart(prices, amounts, time);
  });
  },

  beforeUnmount() {
    this.chartInitializationPromise.then((sciChartSurface) => {
      sciChartSurface.delete();
    });
  },
});
</script>
