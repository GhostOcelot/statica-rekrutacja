import {
  SciChartSurface,
  NumericAxis,
  FastLineRenderableSeries,
  XyDataSeries,
  EllipsePointMarker,
  SweepAnimation,
  SciChartJsNavyTheme,
  NumberRange,
} from 'scichart';

export async function initSciChart(amounts, prices) {
  const { sciChartSurface, wasmContext } = await SciChartSurface.create('scichart-root', {
    theme: new SciChartJsNavyTheme(),
    title: 'SciChart.js First Chart',
    titleStyle: { fontSize: 22 },
  });

  const growBy = new NumberRange(0.1, 0.1);
  sciChartSurface.xAxes.add(new NumericAxis(wasmContext, { axisTitle: 'X Axis', growBy }));
  sciChartSurface.yAxes.add(new NumericAxis(wasmContext, { axisTitle: 'Y Axis', growBy }));

  sciChartSurface.renderableSeries.add(
    new FastLineRenderableSeries(wasmContext, {
      stroke: 'steelblue',
      strokeThickness: 3,
      dataSeries: new XyDataSeries(wasmContext, {
        xValues: amounts,
        yValues: prices,
      }),
      pointMarker: new EllipsePointMarker(wasmContext, { width: 11, height: 11, fill: '#fff' }),
      animation: new SweepAnimation({ duration: 300, fadeEffect: true }),
    }),
  );

  return sciChartSurface;
}
