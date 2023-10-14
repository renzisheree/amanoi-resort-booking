import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxios(url: string) {
  const [dataSecond, setData] = useState(null);
  const [loadingSecond, setLoading] = useState(true);
  const [errorSecond, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { dataSecond, loadingSecond, errorSecond };
}
