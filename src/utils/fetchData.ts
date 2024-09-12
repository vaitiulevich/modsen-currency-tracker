import { FETCH_INTERVAL } from '@constants/urls';
import axios, { AxiosError } from 'axios';
import PropTypes, { string } from 'prop-types';

interface headrsProps {
  [key: string]: string;
}

const fetchData = async (
  url: string,
  params: Record<string, any>,
  headers: headrsProps,
  isInterval: boolean = false,
  cacheDuration: number = FETCH_INTERVAL,
): Promise<any> => {
  const cacheKey = `${url}`;

  const cachedData = localStorage.getItem(cacheKey);
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    const now = Date.now();
    if (!isInterval) {
      return data;
    }

    if (now - timestamp <= cacheDuration) {
      return data;
    }
  }

  try {
    const response = await axios.get(url, {
      params,
      headers,
    });
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ data: response.data, timestamp: Date.now() }),
    );
    return response.data;
  } catch (error) {
    throw error as AxiosError;
  }
};

fetchData.propType = {
  url: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired,
  headers: PropTypes.object.isRequired,
  isInterval: PropTypes.bool,
  cacheDuration: PropTypes.number,
};

export default fetchData;
