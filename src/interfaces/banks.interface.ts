import { Currency } from './currency.inteface';

export interface Bank {
  name: string;
  coordinates: [number, number];
  currency?: string[];
  address: string;
  timeWork: string;
}

export interface BankCoordinates {
  lat: number;
  lng: number;
}

export interface BankCardState {
  banks: Bank[];
  searchTerm: string;
  filteredBanks: Bank[];
  searchableCurrency: Currency[];
}
export interface BankMapProps {
  banks: Bank[];
  center: {
    lng: number;
    lat: number;
  };
}
export interface CurrencySearchProps {
  searchTerm: string;
  searchableCurrency: Currency[];
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectCurrency: (currency: Currency) => void;
}
