import { useState, useEffect } from 'react';

const useDataWithCache = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(url);

        if (cachedData) {
          setData(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const response = await fetch(url);
          const responseData = await response.json();

          setData(responseData);
          setLoading(false);
          localStorage.setItem(url, JSON.stringify(responseData));
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useDataWithCache;
