import 'chartjs-chart-financial';

import url from '@assets/icons/CNY.svg';
import ContactCard from '@components/ContactCard/ContactCard';
import CurrencySelector from '@components/CurrencySelector/CurrencySelector';
import CandlestickChart from '@components/FinancialChart/CandlestickChart';
import FinancialChart from '@components/FinancialChart/FinancialChart';
import TimelineForm from '@components/TimelineForm/TimelineForm';
import { contacts } from '@constants/contacts';
import { ALL_CURRENCY } from '@constants/urls';
import {
  TimelineContextType,
  useTimelineContext,
} from '@store/TimelineContext';
import TimelineContext from '@store/TimelineContext';
import { Chart, registerables } from 'chart.js';
import { Currency } from 'interfaces/currency.inteface';
// import { FinancialDataPoint } from 'chartjs-chart-financial';
import React from 'react';

import { TimelineContainer } from './styled';
// interface AppState {
//   candleData: FinancialDataPoint[];
// }

interface DataPoint {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
}

interface candlestickstate {
  date: string;
  open: string;
  high: string;
  low: string;
  close: string;
}

interface TimelineChartState {
  data: DataPoint[];
  currentCurrency: Currency;
}

class Timeline extends React.Component<{}, TimelineChartState> {
  static contextType = TimelineContext;
  context!: TimelineContextType;

  onSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    candlestickData: candlestickstate,
  ) => {
    e.preventDefault();
    const { date, open, high, low, close } = candlestickData;

    const newData: DataPoint = {
      x: new Date(date),
      o: parseFloat(open),
      h: parseFloat(high),
      l: parseFloat(low),
      c: parseFloat(close),
    };

    this.context.addData(newData);
  };

  onSetCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  render() {
    const { data } = this.context;

    return (
      <TimelineContainer>
        <CurrencySelector onSetCurrency={this.onSetCurrency} />
        <TimelineForm onSubmit={this.onSubmit} />
        <FinancialChart data={data} />
        {/* <CandlestickChart /> */}
      </TimelineContainer>
    );
  }
}

export default Timeline;
