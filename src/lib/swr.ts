import useSWR from 'swr';
import config from '@/config';

const fetcher = async (key: string) => {
  const url = config.apiBaseUrl + '/' + key;
  const res = await fetch(url);
  return res.json();
};

export default <T = any>(key: string | null) => useSWR<T>(key, fetcher);
