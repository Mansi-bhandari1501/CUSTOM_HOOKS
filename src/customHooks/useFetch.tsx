'use client'
import { useEffect, useState } from 'react';
// 'https://jsonplaceholder.typicode.com/posts?_limit=8'
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          url
        );
        if (!response.ok) {
          throw new Error(`Error: Status ${response.status}`);
        }
        else{
            let data = await response.json();
            console.log(data,"📔📔")
            // return data;
            setData(data);
            setError(null);
        }
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {data,loading,error};
};

export default useFetch;