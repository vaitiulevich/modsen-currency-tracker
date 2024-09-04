import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface UseFetchDataProps<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
  fetchData: () => Promise<void>;
}

export const useFetchData = <T>(
  url: string,
  params: Record<string, any> = {},
  apiKey: string,
): UseFetchDataProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    const cachedData = localStorage.getItem(url);
    if (cachedData) {
      setData(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(url, {
        params,
        headers: {
          apikey: apiKey,
        },
      });
      setData(response.data.data);
      localStorage.setItem(url, JSON.stringify(response.data));
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, JSON.stringify(params), apiKey]);

  return { data, loading, error, fetchData };
};
