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

const candlestickData = [
  { x: new Date('2024-09-01'), o: 75, h: 80, l: 70, c: 78 },
  { x: new Date('2024-09-02'), o: 78, h: 85, l: 76, c: 82 },
  { x: new Date('2024-09-03'), o: 82, h: 90, l: 80, c: 88 },
];

// Определяем тип для каждого элемента данных свечи
type CandlestickData = {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
};

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
    },
    y: {
      title: {
        display: true,
        text: 'Price',
      },
    },
  },
};

class CandlestickChart extends Component {
  render() {
    return (
      <div>
        <Chart
          type="candlestick"
          data={{
            datasets: [
              {
                label: 'Stock Prices',
                data: candlestickData,
                borderWidth: 1,
                backgroundColors: { up: 'green', down: 'red' },
                borderColors: { up: 'green', down: 'red' },
                // Приведение типа context.raw к CandlestickData
                // borderColor: (context) => {
                //   const data = context.raw as CandlestickData;
                //   return data.c > data.o ? 'green' : 'red'; // Зелёные свечи для роста, красные для падения
                // },
                // backgroundColor: (context) => {
                //   const data = context.raw as CandlestickData;
                //   return data.c > data.o
                //     ? 'rgba(0, 255, 0, 0.3)'
                //     : 'rgba(255, 0, 0, 0.3)'; // Полупрозрачные цвета
                // },
              },
            ],
          }}
          options={options}
        />
      </div>
    );
  }
}

export default CandlestickChart;
