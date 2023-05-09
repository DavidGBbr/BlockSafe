import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getData(url) {
    try {
      setLoading(true);
      const result = await axios.get(url);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData(url);
  }, [url]);

  return {
    response,
    loading,
    error,
  };
};
