import { useState } from 'react';

type PostState = {
  loading: boolean;
  error: string | null;
};

const API_ACCESS_TOKEN = import.meta.env.VITE_APP_API_ACCESS_TOKEN

export function useFetch() {
  const [state, setState] = useState<PostState>({
    loading: false,
    error: null,
  });

  const postData = async (url: string, body: any) => {
    setState({ ...state, loading: true });
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_ACCESS_TOKEN}`
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`${response.status}`);
      }

      const data = await response.json();

      setState({
        loading: false,
        error: null,
      });

      return {
        data,
        status: response.status
      };
    } catch (error: any) {
      setState({
        loading: false,
        error: error.message || 'Something went wrong',
      });
    }
  };

  return { ...state, postData };
}
