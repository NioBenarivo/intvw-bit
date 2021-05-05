import { useState } from "react";
import axios from "axios";

const API = "http://www.omdbapi.com?apikey=faf7e5bb&s=Batman";

export default function useAxios() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    const source = axios.CancelToken.source();
    setLoading(true);
    
    try {
      const response = await axios.get(API, { cancelToken: source.token });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      if (axios.isCancel(error)) {
        // don't update state in case component is dismounting
      } else {
        setLoading(false);
        setError(error);
      }
    }

    return () => {
      source.cancel();
    };
  };

  return { data, error, loading, request };
};