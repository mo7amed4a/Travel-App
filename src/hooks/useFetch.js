import { useState, useEffect } from "react";
import { Axios } from "../lib/api/Axios";

export default function useFetch(url, query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await Axios.get(`${url}`);
        console.log(data);
        
        setData(data);
      } catch (err) {
        console.log(`route : ${url}, error : ${err}`);
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, query]);

  return { data, loading, error };
}
