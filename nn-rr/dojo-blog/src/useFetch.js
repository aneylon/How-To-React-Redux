import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (res.ok) return res.json();
          else throw new Error("Error!");
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          console.error(error);
          if (error.name === "AbortError") console.log("fetch aborted");
          setError(error.message);
          setIsPending(false);
        });
    }, 1000);
    return () => {
      //   console.log("clean it up!");
      abortController.abort("Fetch canceled");
    };
  }, []);
  return { data, isPending, error };
};

export default useFetch;
