import fetchData from '@utils/fetchData';
import axios from 'axios';

jest.mock('axios');

describe('fetchData', () => {
  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should return cached data if it is valid', async () => {
    const url = 'https://api.test.com/data';
    const params = { key: 'value' };
    const headers = { Authorization: 'Bearer token' };
    const data = { message: 'cached data' };

    localStorage.setItem(url, JSON.stringify({ data, timestamp: Date.now() }));

    const result = await fetchData(url, params, headers);

    expect(result).toEqual(data);
    expect(axios.get).not.toHaveBeenCalled();
  });

  it('should fetch new data if cache is invalid', async () => {
    const url = 'https://api.test.com/data';
    const params = { key: 'value' };
    const headers = { Authorization: 'Bearer token' };
    localStorage.setItem(
      url,
      JSON.stringify({ data: {}, timestamp: Date.now() }),
    );
    (axios.get as jest.Mock).mockResolvedValue({ data: {} });

    const result = await fetchData(url, params, headers, true);

    expect(result).toEqual({});
  });

  it('should throw an error if the fetch fails', async () => {
    const url = 'https://api.test.com/data';
    const params = { key: 'value' };
    const headers = { Authorization: 'Bearer token' };

    (axios.get as jest.Mock).mockRejectedValue(new Error('Network Error'));

    await expect(fetchData(url, params, headers)).rejects.toThrow(
      'Network Error',
    );
  });
});
