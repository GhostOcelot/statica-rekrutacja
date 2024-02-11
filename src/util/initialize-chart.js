import {
  SciChartSurface,
  DateTimeNumericAxis,
  NumericAxis,
  FastLineRenderableSeries,
  XyDataSeries,
  SweepAnimation,
  SciChartJSDarkv2Theme,
  Thickness,
} from 'scichart';
import {
  dateTitleStyle,
  priceTitleStyle,
  amountTitleStyle,
  dateLabelStyle,
  priceLabelStyle,
  amountLabelStyle,
} from './chart-styles';

export async function initSciChart(prices, amounts, time) {
  const { sciChartSurface, wasmContext } = await SciChartSurface.create('scichart-root', {
    theme: new SciChartJSDarkv2Theme(),
    title: 'Statica - rekrutacja',
    titleStyle: { fontSize: 22 },
  });

  sciChartSurface.padding = Thickness.fromNumber(20);

  sciChartSurface.xAxes.add(
    new DateTimeNumericAxis(wasmContext, {
      axisTitle: 'Date and Time',
      axisTitleStyle: dateTitleStyle,
      labelStyle: dateLabelStyle,
    }),
  );

  sciChartSurface.yAxes.add(
    new NumericAxis(wasmContext, {
      axisTitle: 'Price',
      id: 'Price',
      axisTitleStyle: priceTitleStyle,
      labelStyle: priceLabelStyle,
    }),
  );

  sciChartSurface.yAxes.add(
    new NumericAxis(wasmContext, {
      axisTitle: 'Amount',
      id: 'Amount',
      axisTitleStyle: amountTitleStyle,
      labelStyle: amountLabelStyle,
    }),
  );

  sciChartSurface.renderableSeries.add(
    new FastLineRenderableSeries(wasmContext, {
      stroke: 'steelblue',
      strokeThickness: 1,
      yAxisId: 'Price',
      dataSeries: new XyDataSeries(wasmContext, {
        xValues: time,
        yValues: prices,
      }),
      animation: new SweepAnimation({ duration: 2000 }),
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
      animation: new SweepAnimation({ duration: 2000 }),
    }),
  );

  return sciChartSurface;
}
