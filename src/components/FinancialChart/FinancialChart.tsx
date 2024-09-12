import 'chartjs-adapter-date-fns';

import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';
import Loader from '@components/Loader/Loader';
import TimlineModal from '@components/TimlineModal/TimlineModal';
import { CHART_TITLE, CHART_X_TITLE, CHART_Y_TITLE } from '@constants/messages';
import TimelineContext, { timelineColors } from '@store/TimelineContext';
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
import {
  FinancialChartProps,
  TimelineContextType,
} from 'interfaces/timeline.interface';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  Tooltip,
  Title,
  CandlestickController,
  CandlestickElement,
);

class FinancialChart extends Component<FinancialChartProps> {
  static contextType = TimelineContext;
  context!: TimelineContextType;

  state = {
    isModalOpen: false,
    currentFinance: this.context.currentFinance,
  };
  componentDidUpdate(prevProps: FinancialChartProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ currentFinance: this.context.currentFinance });
    }
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { data, dateMin, dateMax } = this.props;

    const options: ChartOptions<'candlestick'> = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: CHART_TITLE,
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
            text: CHART_X_TITLE,
          },
          min: dateMin,
          max: dateMax,
          ticks: {
            autoSkip: true,
            maxTicksLimit: 30,
          },
        },
        y: {
          title: {
            display: true,
            text: CHART_Y_TITLE,
          },
        },
      },
    };

    const datasets = [
      {
        borderWidth: 1,
        barThickness: 10,
        backgroundColors: timelineColors,
        borderColors: timelineColors,
        data: data,
      },
    ];

    const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
      const chart = ChartJS.getChart(
        event.nativeEvent.target as HTMLCanvasElement,
      );

      if (!chart) {
        return;
      }

      const points = chart.getElementsAtEventForMode(
        event.nativeEvent,
        'nearest',
        { intersect: true },
        false,
      );

      if (points.length) {
        const firstPoint = points[0];
        const datasetIndex = firstPoint.datasetIndex;
        const dataIndex = firstPoint.index;

        const clickedData = datasets[datasetIndex].data[dataIndex];

        this.context.onSetCurrentFinance({
          x: clickedData.x,
          o: clickedData.o,
          h: clickedData.h,
          l: clickedData.l,
          c: clickedData.c,
        });
        this.setState({
          isModalOpen: true,
        });
      }
    };

    return (
      <div>
        <TimlineModal
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
        />
        {data.length > 2 ? (
          <Chart
            type="candlestick"
            data={{
              datasets,
            }}
            onClick={handleClick}
            options={options}
          />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default FinancialChart;
