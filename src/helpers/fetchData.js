import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url, post) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const whatMethod = () => post ? axios.post(url, post) : axios.get(url)
        const response = await whatMethod()

        if (isMounted) {
          setData(response.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Here I'm stating a clean up function to avoid setting state after component unmounts.
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
