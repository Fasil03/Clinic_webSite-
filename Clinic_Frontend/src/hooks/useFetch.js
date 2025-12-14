import { useState, useEffect, useCallback } from 'react';

export const useFetch = (apiFunction, initialParams = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (params = initialParams) => {
    try {
      setLoading(true);
      const result = await apiFunction(...params);
      setData(result);
      setError(null);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction, JSON.stringify(initialParams)]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};