import { useState, useEffect } from "react";

function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,setError]= useState(null);

  useEffect(() => {
    const obtencionData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if(!response.ok){
          throw new Error('error al cargar los datos')
        }
        const data = await response.json();
        console.log(data);
        setData(data);

      } catch (err) {
        setError(err.message)
      }finally{
        setLoading(false);
      }
    };
    obtencionData();
  }, [url]);

  return {data ,loading , error}
}
export default useFetch;
