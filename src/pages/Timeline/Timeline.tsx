import 'chartjs-chart-financial';

import { ChangeEvent, Component } from 'react';
import CurrencySelector from '@components/CurrencySelector/CurrencySelector';
import FinancialChart from '@components/FinancialChart/FinancialChart';
import Notification from '@components/Notification/Notification';
import {
  ERR_FEATCH_DATA_MESS,
  ERROR_NOTIFICATION,
  SUCCESS_COMLITED_NOTIFICATION,
} from '@constants/messages';
import {
  DATE_MAX_OFFSET,
  DATE_MIN_OFFSET,
  INITIAL_CURRENCY,
} from '@constants/timeline';
import TimelineContext, { TimelineContextType } from '@store/TimelineContext';
import { getDateRange } from '@utils/dateHelpers';
import { getCurrencyHistory } from '@utils/getCurrencyHistory';
import { notificationService } from '@utils/NotificationService';
import withScrollAnimation from 'HOC/withScrollAnimation';
import {
  FetchDataPoint,
  TimelineChartState,
  TimelineData,
} from 'interfaces/timeline.interface';

import { TimelineContainer } from './styled';

class Timeline extends Component<{}, TimelineChartState> {
  static contextType = TimelineContext;
  context!: TimelineContextType;

  state: TimelineChartState = {
    isShowNotification: false,
    notificationMessage: '',
  };

  fetchCurrencyData = (currency: string) => {
    try {
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

      this.setState((prev) => ({
        ...prev,
        notificationMessage: SUCCESS_COMLITED_NOTIFICATION,
      }));
    } catch (error) {
      this.setState({
        notificationMessage: ERROR_NOTIFICATION,
        isShowNotification: true,
      });
      console.error(ERR_FEATCH_DATA_MESS, error);
    }
  };

  componentDidMount() {
    notificationService.subscribe(this.handleShowNotification);
    this.fetchCurrencyData(INITIAL_CURRENCY);
  }

  componentWillUnmount() {
    notificationService.unsubscribe(this.handleShowNotification);
  }

  handleShowNotification = () => {
    this.setState({ isShowNotification: true });

    setTimeout(() => this.setState({ isShowNotification: false }), 2000);
  };

  handleSetCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    this.fetchCurrencyData(e.target.value);
  };

  render() {
    const { data } = this.context;
    const { isShowNotification, notificationMessage } = this.state;

    const { dateMin, dateMax } = getDateRange(DATE_MIN_OFFSET, DATE_MAX_OFFSET);

    return (
      <TimelineContainer>
        {isShowNotification && (
          <Notification
            message={notificationMessage}
            onClose={() => this.setState({ isShowNotification: false })}
          />
        )}
        <CurrencySelector handleSetCurrency={this.handleSetCurrency} />
        <FinancialChart dateMin={dateMin} dateMax={dateMax} data={data} />
      </TimelineContainer>
    );
  }
}

export default withScrollAnimation(Timeline);
