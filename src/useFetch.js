import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) throw Error("Cound't fetch data for that resourse");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Aborted!");
        } else {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!signal.aborted) setIsPending(false);
      });

    return () => {
      console.log("Cleaning up fetch..");
      abortController.abort();
    };
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
