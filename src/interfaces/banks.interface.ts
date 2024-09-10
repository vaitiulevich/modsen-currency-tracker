import { Currency } from './currency.inteface';

export interface Bank {
  name: string;
  coordinates: [number, number];
  currency?: string[];
}

export interface BankCoordinates {
  lat: number;
  lng: number;
}

export interface BankCardState {
  banks: Bank[];
  searchTerm: string;
  filteredBanks: Bank[];
  searcebleCurrency: Currency[];
}
export interface BankMapProps {
  banks: Bank[];
}
export interface CurrencySearchProps {
  searchTerm: string;
  searcebleCurrency: Currency[];
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectCurrency: (currency: Currency) => void;
}
