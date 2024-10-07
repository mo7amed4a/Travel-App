import { useState, useEffect } from "react";
import { Axios } from "../lib/api/Axios";

export default function useFetch(url, query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);


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
  }, [url, query, reload]);

  return { data, loading, error, setReload};
}
