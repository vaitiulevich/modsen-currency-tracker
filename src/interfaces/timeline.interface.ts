export interface TimelineData {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
}

export interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FetchDataPoint {
  price_close: number;
  price_high: number;
  price_low: number;
  price_open: number;
  time_close: string;
}

export interface TimelineChartState {
  isShowNotification: boolean;
  notificationMessage: string;
}

export interface FinancialChartProps {
  data: TimelineData[];
  dateMin: number;
  dateMax: number;
}

export interface CurrencySelectorProps {
  handleSetCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface TimelineFormProps {
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    candlestickData: TimelineData,
  ) => void;
  currentFinance?: TimelineData;
}

export interface TimelineFormState {
  timelineData: TimelineData;
  errors: {
    [key: string]: string;
  };
}
