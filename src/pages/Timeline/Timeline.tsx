import 'chartjs-chart-financial';

import React from 'react';
import CurrencySelector from '@components/CurrencySelector/CurrencySelector';
import FinancialChart from '@components/FinancialChart/FinancialChart';
import Notification from '@components/Notification/Notification';
import { SUCCESS_COMLITED_NOTIFICATION } from '@constants/messages';
import TimelineContext from '@store/TimelineContext';
import { getCurrencyHistory } from '@utils/getCurrencyHistory';
import { notificationService } from '@utils/NotificationService';
import {
  FetchDataPoint,
  TimelineChartState,
  TimelineContextType,
  TimelineData,
} from 'interfaces/timeline.interface';

import { TimelineContainer } from './styled';

class Timeline extends React.Component<{}, TimelineChartState> {
  static contextType = TimelineContext;
  context!: TimelineContextType;

  state: TimelineChartState = {
    isShowNotification: false,
  };

  onFetchCurrencyData = async (currency: string) => {
    const currencyHistory = getCurrencyHistory(currency);
    const transformedData: TimelineData[] = currencyHistory.map(
      (item: FetchDataPoint) => ({
        x: new Date(item.time_close),
        o: item.price_open,
        h: item.price_high,
        l: item.price_low,
        c: item.price_close,
      }),
    );
    this.context.setTimlineData(transformedData);
    notificationService.notify();
  };

  componentDidMount() {
    notificationService.subscribe(this.onShowNotification);
    this.onFetchCurrencyData('ARS');
  }

  componentWillUnmount() {
    notificationService.unsubscribe(this.onShowNotification);
  }

  onShowNotification = () => {
    this.setState({ isShowNotification: true });

    setTimeout(() => this.setState({ isShowNotification: false }), 2000);
  };

  onSetCurrency = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.onFetchCurrencyData(e.target.value);
  };

  render() {
    const { data } = this.context;
    const { isShowNotification } = this.state;
    const dateMin = new Date();
    dateMin.setDate(dateMin.getDate() - 30);

    const dateMax = new Date();
    dateMax.setDate(dateMax.getDate() + 2);
    return (
      <TimelineContainer>
        {isShowNotification && (
          <Notification
            message={SUCCESS_COMLITED_NOTIFICATION}
            onClose={() => this.setState({ isShowNotification: false })}
          />
        )}
        <CurrencySelector onSetCurrency={this.onSetCurrency} />
        <FinancialChart
          dateMin={dateMin.getTime()}
          dateMax={dateMax.getTime()}
          data={data}
        />
      </TimelineContainer>
    );
  }
}

export default Timeline;
