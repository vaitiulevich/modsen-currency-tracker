import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ALL_CURRENCY } from '@constants/currency';
import {
  API_KEY,
  endPoints,
  FETCH_INTERVAL,
  URL_CURRENCY_API,
} from '@constants/urls';
import fetchData from '@utils/fetchData';
import { Currency, LatestValuesData } from 'interfaces/currency.inteface';

interface lastUpdatedState {
  last_updated_at: string;
}

export interface CurrencyContextType {
  currencyList: Currency[];
  valuesList: LatestValuesData | null;
  lastUpdated: lastUpdatedState;
  error: string | null;
  loading: boolean;
  fetchCurrencyData: () => Promise<void>;
  fetchValuesData: () => Promise<void>;
}

export const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currencyList, setCurrencyList] = useState<Currency[]>([]);
  const [lastUpdated, setLastUpdated] = useState<lastUpdatedState>({
    last_updated_at: '',
  });
  const [valuesList, setValuesList] = useState<LatestValuesData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const params = useMemo(
    () => ({
      currencies: ALL_CURRENCY.join(','),
    }),
    [],
  );

  const headers = useMemo(
    () => ({
      apikey: API_KEY,
    }),
    [],
  );

  const fetchCurrencyData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchData(
        URL_CURRENCY_API + endPoints.allCurrencies,
        params,
        headers,
        false,
      );
      setCurrencyList(Object.values(data.data));
    } catch (err) {
      setError('Failed to fetch currency data');
    } finally {
      setLoading(false);
    }
  }, [params]);

  const fetchValuesData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchData(
        URL_CURRENCY_API + endPoints.latestCurrency,
        params,
        headers,
        true,
      );
      setValuesList(data.data);
      setLastUpdated(data.meta);
    } catch (err) {
      setError('Failed to fetch values data');
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchCurrencyData();
    fetchValuesData();
    const intervalId = setInterval(fetchValuesData, FETCH_INTERVAL);
    return () => clearInterval(intervalId);
  }, [fetchCurrencyData, fetchValuesData]);

  return (
    <CurrencyContext.Provider
      value={{
        currencyList,
        valuesList,
        lastUpdated,
        error,
        loading,
        fetchCurrencyData,
        fetchValuesData,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrencyContext = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useUpdateContext must be used within an UpdateProvider');
  }
  return context;
};
