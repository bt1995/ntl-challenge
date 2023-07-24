import { useState, useEffect } from 'react';


const useDataWithCache = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cacheData = localStorage.getItem(url);
        const cacheTimestamp = localStorage.getItem(`${url}-timestamp`);
        const currentTime = new Date().getTime();

        if (cacheData && cacheTimestamp) {
          const timeElapsed = currentTime - Number(cacheTimestamp);

          if (timeElapsed < 3600000) {
            setData(JSON.parse(cacheData));
            setLoading(false);
            return;
          }
        }

        const response = await fetch(url);
        const responseData = await response.json();

        setData(responseData);
        setLoading(false);
        localStorage.setItem(url, JSON.stringify(responseData));
        localStorage.setItem(`${url}-timestamp`, currentTime.toString());
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
