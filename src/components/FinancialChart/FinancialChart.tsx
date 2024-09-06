import 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';

import { Chart, ChartOptions, registerables } from 'chart.js';
import {
  CandlestickController,
  CandlestickElement,
} from 'chartjs-chart-financial';
import React from 'react';
import { Chart as TimelineChart } from 'react-chartjs-2';

Chart.register(...registerables, CandlestickController, CandlestickElement);

interface DataPoint {
  t: number;
  o: number;
  h: number;
  l: number;
  c: number;
}

interface FinancialChartProps {
  data: DataPoint[];
}

interface FinancialChartState {
  chartData: {
    datasets: { data: DataPoint[]; backgroundColor: string }[];
  };
  options: ChartOptions<'candlestick'>;
}

class FinancialChart extends React.Component<
  FinancialChartProps,
  FinancialChartState
> {
  constructor(props: FinancialChartProps) {
    super(props);

    this.state = {
      chartData: {
        datasets: [
          {
            data: props.data,
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'timeseries',
            time: {
              unit: 'day',
            },
            title: {
              display: true,
              text: 'DAY',
            },
          },
          y: {
            type: 'linear',
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  }

  componentDidUpdate(prevProps: FinancialChartProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({
        chartData: {
          datasets: [
            {
              data: this.props.data,
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
            },
          ],
        },
      });
    }
  }

  render() {
    console.log(this.state.chartData);

    return (
      <div>
        <TimelineChart
          type="candlestick"
          data={this.state.chartData}
          options={this.state.options}
        />
      </div>
    );
  }
}

export default FinancialChart;
