import { useState, useEffect } from "react";

interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
}

export const useFetch = <T>(url: string, options?: FetchOptions, dependencies:  unknown[] = []) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);

        const json: T = await response.json();
        setData(json);
        setError(null);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Ocorreu um erro inesperado");
        }
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, [url, options, ...dependencies]);

  return { data, isPending, error };
};
