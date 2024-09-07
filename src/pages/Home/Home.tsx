import ValuePanel from '@components/ValuePanel/ValuePanel';
import {
  ALL_CURRENCY,
  API_KEY,
  endPoints,
  FETCH_INTERVAL,
  STOCKS_LIST,
  URL_CURRENCY_API,
} from '@constants/urls';
import fetchData from '@utils/fetchData';
import { Currency, CurrencyData } from 'interfaces/currency.inteface';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { AllCurrencyContainer, HomeContainer, Title } from './styled';

interface LatestValuesData {
  [key: string]: {
    code: string;
    value: number;
  };
}

const Home: React.FC = () => {
  const [currencyList, setCurrencyList] = useState<Currency[]>([]);
  const [valuesList, setValuesList] = useState<LatestValuesData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const params = useMemo(
    () => ({
      currencies: ALL_CURRENCY.join(','),
    }),
    [],
  );

  const fetchCurrencyData = useCallback(async () => {
    try {
      const data = await fetchData(
        URL_CURRENCY_API + endPoints.allCurrencies,
        params,
        API_KEY,
        false,
      );
      setCurrencyList(Object.values(data.data));
    } catch (err) {
      setError('Failed to fetch currency data');
    }
  }, [params]);

  const fetchValuesData = useCallback(async () => {
    try {
      const data = await fetchData(
        URL_CURRENCY_API + endPoints.latestCurrency,
        params,
        API_KEY,
        true,
      );
      setValuesList(data.data);
    } catch (err) {
      setError('Failed to fetch values data');
    }
  }, [params]);

  useEffect(() => {
    fetchCurrencyData();
    fetchValuesData();
    const intervalId = setInterval(fetchValuesData, FETCH_INTERVAL);
    return () => clearInterval(intervalId);
  }, [fetchCurrencyData, fetchValuesData]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <HomeContainer>
      <Title>Stocks</Title>
      <AllCurrencyContainer>
        {STOCKS_LIST.map((item) => (
          <ValuePanel
            key={item.id}
            item={item}
            value={+item.value}
            isCurrency={false}
          />
        ))}
      </AllCurrencyContainer>
      <Title>Quotes</Title>
      <AllCurrencyContainer>
        {currencyList.map((item: Currency) => (
          <ValuePanel
            key={item.code}
            item={item}
            value={valuesList && item.code ? valuesList[item.code].value : 0}
            isCurrency={true}
          />
        ))}
      </AllCurrencyContainer>
    </HomeContainer>
  );
};

export default Home;
