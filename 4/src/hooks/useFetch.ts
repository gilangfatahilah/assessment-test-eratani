import { useState, useEffect } from 'react';

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

export function useFetch<T>(url: string) {
  const [response, setResponse] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = (await response.json()) as T;
        setResponse({
          data,
          loading: false,
          error: null,
        });
      } catch (error: any) {
        setResponse({
          data: null,
          loading: false,
          error: error.message || 'Something went wrong',
        });
      }
    };

    fetchData();
  }, [url]);

  return response;
}
