export interface Currency {
  code?: string;
  countries?: string[];
  decimal_digits?: number;
  name?: string;
  name_plural?: string;
  rounding?: number;
  symbol?: string;
  symbol_native?: string;
  type?: string;
}

export interface LatestValuesData {
  [key: string]: {
    code: string;
    value: number;
  };
}

export interface CurrencyValue {
  code?: string;
  value?: number;
}

export interface CurrencyPanelProps {
  item?: Currency;
  value?: number;
  isCurrency?: boolean;
  type?: string;
}

export interface CurrencyData {
  [key: string]: CurrencyValue;
}
