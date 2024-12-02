import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        async function fetchMovie() {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Network Response Failed ${response.statusText}`);
                }
                const json = await response.json();
                setData(json.Search || []);
            } catch (err) {
                setError(err.message);
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchMovie();
    }, [url]);
  return {data, error, loading}
}
