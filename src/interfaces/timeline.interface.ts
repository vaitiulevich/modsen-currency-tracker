export interface TimelineData {
  x: Date;
  o: number;
  h: number;
  l: number;
  c: number;
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
}

export interface FinancialChartProps {
  data: TimelineData[];
  dateMin: number;
  dateMax: number;
}

export interface CurrencySelectorProps {
  onSetCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface TimelineContextType {
  data: TimelineData[];
  addData: (newData: TimelineData) => void;
  setTimlineData: (newData: TimelineData[]) => void;
  currentFinance: TimelineData;
  onSetCurrentFinance: (newFinance: TimelineData) => void;
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
