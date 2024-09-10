import { CurrencyName } from '@components/ValuePanel/styled';

export const URL_CURRENCY_API = 'https://api.currencyapi.com/v3';

export const endPoints = {
  latestCurrency: '/latest',
  allCurrencies: '/currencies',
  exchange: '/pair',
};

export const ALL_CURRENCY = [
  'USD',
  'EUR',
  'CAD',
  'AUD',
  'ARS',
  'CNY',
  'JPY',
  'BTC',
];

export const STOCKS_LIST = [
  { id: 0, name: 'Bovespa Index', value: 0.15, code: 'BVP' },
  { id: 1, name: 'IFIX', value: 0.15, code: 'IFIX' },
];

export const FETCH_INTERVAL = 25000000;

export const API_KEY = 'cur_live_QQoYQScj9JjCrJcNXuZCMPw6FFlKh2vEuG4e22Tm';
export const MAPBOX_TOKEN =
  'pk.eyJ1Ijoia2F0ZWthdGUwMyIsImEiOiJjbTBxbzdxZGQwMDVnMmlzYmYzOWY2bXVzIn0.gHTo5KsWLetooYvXZK0tsw';
