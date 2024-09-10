import 'chartjs-adapter-date-fns';

import {
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  LinearScale,
  TimeScale,
  Title,
  Tooltip,
} from 'chart.js';
import {
  CandlestickController,
  CandlestickElement,
} from 'chartjs-chart-financial';
import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Title,
  CandlestickController,
  CandlestickElement,
);
interface FinanceProps {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
}

interface FinancialChartProps {
  data: FinanceProps[];
}

class FinancialChart extends Component<FinancialChartProps> {
  // chartRef = React.createRef<ChartJS<'candlestick'>>();

  // componentDidUpdate(prevProps: FinancialChartProps) {
  //   if (prevProps.data !== this.props.data) {
  //     this.updateChart();
  //   }
  // }

  // updateChart() {
  //   const chartInstance = this.chartRef.current;

  //   if (chartInstance) {
  //     chartInstance.data.datasets[0].data = this.props.data.map((point) => ({
  //       x: point.x.getTime(),
  //       o: point.o,
  //       h: point.h,
  //       l: point.l,
  //       c: point.c,
  //     }));
  //     chartInstance.update();
  //   }
  // }
  render() {
    const { data } = this.props;

    const options: ChartOptions<'candlestick'> = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Candlestick Chart Example',
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
          },
          title: {
            display: true,
            text: 'Date',
          },
          min: new Date('2024-08-30').getTime(),
          max: new Date('2024-09-30').getTime(),
          ticks: {
            autoSkip: true,
            maxTicksLimit: 30,
          },
        },
        y: {
          title: {
            display: true,
            text: 'Value',
          },
        },
      },
    };

    const datasets = [
      {
        label: 'Stock Prices',
        borderWidth: 1,
        barThickness: 10,
        backgroundColors: { up: '#16C782', down: '#EA3943' },
        borderColors: { up: '#16C782', down: '#EA3943' },
        data: data.map((point) => ({
          x: point.x,
          o: point.o,
          h: point.h,
          l: point.l,
          c: point.c,
        })),
      },
    ];

    console.log('fc', datasets);
    return (
      <div>
        {data.length > 2 ? (
          <Chart
            type="candlestick"
            data={{
              datasets,
            }}
            options={options}
          />
        ) : (
          <p>jj</p>
        )}
      </div>
    );
  }
}

export default FinancialChart;
