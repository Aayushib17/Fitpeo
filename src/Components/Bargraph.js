import * as React from 'react';
import { ChartContainer, BarPlot } from '@mui/x-charts';
const uData = [40000, 30000, 20000, 27080, 18900, 23900, 34900,20000,40000,40000,25000,30000];
const xLabels = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
];

export default function TinyBarChart() {
  return (
    <ChartContainer
      width={700}
      height={220}
      series={[{ data: uData, label: 'months', type: 'bar' }]}
      xAxis={[{ scaleType: 'band', data: xLabels }]}
    >
      <BarPlot />
    </ChartContainer>
  );
}