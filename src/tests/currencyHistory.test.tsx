import {
  CACHE_EXPIRATION_KEY,
  CACHE_KEY,
  CURRENCY_KEY,
} from '@constants/cache';
import { getCurrencyHistory } from '@utils/getCurrencyHistory';

describe('getCurrencyHistory', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should return cached data if it is valid', () => {
    const selectedCurrency = 'USD';
    const mockData = [
      {
        price_close: 1.1,
        price_high: 1.15,
        price_low: 1.05,
        price_open: 1.1,
        time_close: new Date().toISOString(),
      },
    ];

    const now = Date.now();
    localStorage.setItem(CACHE_KEY, JSON.stringify(mockData));
    localStorage.setItem(
      CACHE_EXPIRATION_KEY,
      (now + 24 * 60 * 60 * 1000).toString(),
    );
    localStorage.setItem(CURRENCY_KEY, selectedCurrency);

    const result = getCurrencyHistory(selectedCurrency);
    expect(result).toEqual(mockData);
  });

  test('should generate new data if cache is invalid', () => {
    const selectedCurrency = 'EUR';

    const now = Date.now();
    localStorage.setItem(CACHE_KEY, JSON.stringify([]));
    localStorage.setItem(CACHE_EXPIRATION_KEY, (now - 1).toString());
    localStorage.setItem(CURRENCY_KEY, 'USD');

    const result = getCurrencyHistory(selectedCurrency);
    expect(result).toHaveLength(30);
    expect(localStorage.getItem(CACHE_KEY)).toBeTruthy();
    expect(localStorage.getItem(CURRENCY_KEY)).toBe(selectedCurrency);
  });

  test('should generate new data for the same currency if cache expired', () => {
    const selectedCurrency = 'GBP';

    const now = Date.now();
    localStorage.setItem(CACHE_KEY, JSON.stringify([]));
    localStorage.setItem(CACHE_EXPIRATION_KEY, (now - 1).toString());
    localStorage.setItem(CURRENCY_KEY, selectedCurrency);

    const result = getCurrencyHistory(selectedCurrency);
    expect(result).toHaveLength(30);
    expect(localStorage.getItem(CURRENCY_KEY)).toBe(selectedCurrency);
  });
});
