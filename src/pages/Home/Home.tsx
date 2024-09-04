import ValuePanel from '@components/ValuePanel/ValuePanel';
import {
  ALL_CURRENCY,
  API_KEY,
  endPoints,
  STOCKS_LIST,
  URL_CURRENCY_API,
} from '@constants/urls';
import { useFetchData } from '@utils/hooks/useFetchData';
import { Currency, CurrencyData } from 'interfaces/currency.inteface';
import React, { useEffect, useMemo, useState } from 'react';

import { AllCurrencyContainer, HomeContainer, Title } from './styled';

interface LatestValuesData {
  data: {
    [key: string]: {
      code: string;
      value: number;
    };
  };
  meta: {
    last_updated_at: string;
  };
}

const Home: React.FC = () => {
  const [currencyList, setCurrencyList] = useState<Currency[]>([]);
  const [valuesList, setValuesList] = useState<CurrencyData | null>(null);

  const params = useMemo(() => {
    return { currencies: ALL_CURRENCY.join(',') };
  }, [ALL_CURRENCY]);

  const {
    data: allCurrenciesData,
    loading: loadingAll,
    error: errorAll,
  } = useFetchData(URL_CURRENCY_API + endPoints.allCurrencies, params, API_KEY);

  const {
    data: latestValuesData,
    loading: loadingLatest,
    error: errorLatest,
  } = useFetchData<LatestValuesData>(
    URL_CURRENCY_API + endPoints.latestCurrency,
    params,
    API_KEY,
  );

  useEffect(() => {
    if (allCurrenciesData) {
      setCurrencyList(Object.values(allCurrenciesData));
    }
  }, [allCurrenciesData]);

  useEffect(() => {
    if (latestValuesData) {
      setValuesList(latestValuesData.data);
    }
  }, [latestValuesData]);

  if (loadingAll || loadingLatest) return <p>Loading...</p>;

  return (
    <HomeContainer>
      <Title>Stocks</Title>
      <AllCurrencyContainer>
        {STOCKS_LIST.map((item) => (
          <ValuePanel
            key={item.id}
            item={item}
            value={item.value}
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
            value={
              valuesList && item.code && valuesList[item.code]
                ? 'R$' + valuesList[item.code].value?.toFixed(2)
                : 'R$ -'
            }
            isCurrency={true}
          />
        ))}
      </AllCurrencyContainer>
    </HomeContainer>
  );
};

export default Home;
