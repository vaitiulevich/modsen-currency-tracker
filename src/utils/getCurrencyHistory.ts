import {
  CACHE_EXPIRATION_KEY,
  CACHE_KEY,
  CURRENCY_KEY,
} from '@constants/cache';

type CurrencyData = {
  price_close: number;
  price_high: number;
  price_low: number;
  price_open: number;
  time_close: string;
};

const getRandomInRange = (min: number, max: number) => {
  return +(Math.random() * (max - min) + min).toFixed(5);
};

const generateRandomCurrencyData = (date: Date): CurrencyData => {
  const price_open = getRandomInRange(1.0, 1.2);
  const price_close = getRandomInRange(1.0, 1.2);
  const price_high =
    Math.max(price_open, price_close) + getRandomInRange(0, 0.01);
  const price_low =
    Math.min(price_open, price_close) - getRandomInRange(0, 0.01);
  const time_close = date.toISOString();

  return {
    price_close,
    price_high,
    price_low,
    price_open,
    time_close,
  };
};

const generateCurrencyDataFor30Days = (): CurrencyData[] => {
  const data: CurrencyData[] = [];
  let currentDate = new Date();

  for (let i = 0; i < 30; i++) {
    data.push(generateRandomCurrencyData(currentDate));
    currentDate.setDate(currentDate.getDate() - 1);
  }
  return data;
};

export const getCurrencyHistory = (
  selectedCurrency: string,
): CurrencyData[] => {
  const now = Date.now();
  const cacheExpiration = localStorage.getItem(CACHE_EXPIRATION_KEY);
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cachedCurrency = localStorage.getItem(CURRENCY_KEY);

  if (
    cacheExpiration &&
    now < +cacheExpiration &&
    cachedData &&
    cachedCurrency === selectedCurrency
  ) {
    return JSON.parse(cachedData);
  } else {
    const newHistory = generateCurrencyDataFor30Days();

    localStorage.setItem(CACHE_KEY, JSON.stringify(newHistory));
    localStorage.setItem(
      CACHE_EXPIRATION_KEY,
      (now + 24 * 60 * 60 * 1000).toString(),
    );
    localStorage.setItem(CURRENCY_KEY, selectedCurrency);

    return newHistory;
  }
};
