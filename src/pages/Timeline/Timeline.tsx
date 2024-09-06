import 'chartjs-chart-financial';

import ContactCard from '@components/ContactCard/ContactCard';
import FinancialChart from '@components/FinancialChart/FinancialChart';
import { contacts } from '@constants/contacts';
import { Chart, registerables } from 'chart.js';
// import { FinancialDataPoint } from 'chartjs-chart-financial';
import React from 'react';

import { TimelineContainer } from './styled';

// interface AppState {
//   candleData: FinancialDataPoint[];
// }

interface DataPoint {
  t: number;
  o: number;
  h: number;
  l: number;
  c: number;
}
interface TimelineChartState {
  data: DataPoint[];
}
// interface TimelineProps {}

// Chart.register(...registerables);
// const exampleData: DataPoint[] = [
//   { t: Date.now() - 86400000, o: 100, h: 105, l: 95, c: 100 },
//   { t: Date.now(), o: 100, h: 110, l: 100, c: 105 },
// ];

class Timeline extends React.Component<{}, TimelineChartState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [
        { t: Date.now() - 86400000, o: 0.2, h: 0.3, l: 0.4, c: 0.5 },
        { t: Date.now(), o: 100, h: 110, l: 100, c: 105 },
        {
          t: new Date('2023-01-01').getTime(),
          o: 0.2,
          h: 0.3,
          l: 0.4,
          c: 0.5,
        },
        {
          t: new Date('2023-01-02').getTime(),
          o: 0,
          h: 2,
          l: 3,
          c: 4,
        },
        {
          t: new Date('2023-01-03').getTime(),
          o: 40000,
          h: 41500,
          l: 39500,
          c: 41000,
        },
        {
          t: new Date('2023-01-04').getTime(),
          o: 41000,
          h: 42000,
          l: 40500,
          c: 41500,
        },
        {
          t: new Date('2023-01-05').getTime(),
          o: 41500,
          h: 43000,
          l: 41000,
          c: 42500,
        },
        {
          t: new Date('2023-01-06').getTime(),
          o: 42500,
          h: 44000,
          l: 42000,
          c: 43500,
        },
      ],
    };
  }
  render() {
    return (
      <TimelineContainer>
        <FinancialChart data={this.state.data} />
      </TimelineContainer>
    );
  }
}

export default Timeline;
