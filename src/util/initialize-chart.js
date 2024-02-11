import {
  SciChartSurface,
  DateTimeNumericAxis,
  NumericAxis,
  FastLineRenderableSeries,
  XyDataSeries,
  SweepAnimation,
  SciChartJSDarkv2Theme,
} from 'scichart';

export async function initSciChart(prices, amounts, time) {
  const { sciChartSurface, wasmContext } = await SciChartSurface.create('scichart-root', {
    theme: new SciChartJSDarkv2Theme(),
    title: 'SciChart.js First Chart',
    titleStyle: { fontSize: 22 },
  });

  sciChartSurface.xAxes.add(
    new DateTimeNumericAxis(wasmContext, {
      axisTitle: 'Date and Time',
      TextFormatting: 'dd-MMM-yyyy',
      SubDayTextFormatting: 'HH:mm:ss',
    }),
  );
  sciChartSurface.yAxes.add(new NumericAxis(wasmContext, { axisTitle: 'Price', id: 'Price' }));
  sciChartSurface.yAxes.add(new NumericAxis(wasmContext, { axisTitle: 'Amount', id: 'Amount' }));

  sciChartSurface.renderableSeries.add(
    new FastLineRenderableSeries(wasmContext, {
      stroke: 'steelblue',
      strokeThickness: 1,
      yAxisId: 'Price',
      dataSeries: new XyDataSeries(wasmContext, {
        xValues: time,
        yValues: prices,
      }),
      animation: new SweepAnimation({ duration: 300, fadeEffect: true }),
    }),
  );

  sciChartSurface.renderableSeries.add(
    new FastLineRenderableSeries(wasmContext, {
      stroke: 'white',
      strokeThickness: 1,
      yAxisId: 'Amount',
      dataSeries: new XyDataSeries(wasmContext, {
        xValues: time,
        yValues: amounts,
      }),
      animation: new SweepAnimation({ duration: 300, fadeEffect: true }),
    }),
  );

  return sciChartSurface;
}
