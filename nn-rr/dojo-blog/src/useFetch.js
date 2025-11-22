import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
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
          setError(error.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);
  return { data, isPending, error };
};

export default useFetch;
