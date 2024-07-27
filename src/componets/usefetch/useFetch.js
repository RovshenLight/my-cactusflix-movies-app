import {useState, useEffect} from 'react'

const useFetch = (url) => {
  
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

  setTimeout(() => {
    
    fetch(url, {signal: abortCont.signal})
    .then((res) => {
      if(!res.ok) {
        throw Error('You Foggot to conecte to port!!! Tip: npx json-server --watch date/date.json --port 8000 and 7000 ');
      }
      return res.json();
    })
    .then((data) => {
      setData(data);
      setIsPending(false);
    })
    .catch((err) => {
      if(err.name === 'AboretContent') {
        console.log('Cleaned');
      } else {

        setIsPending(false);
        setError(err.massage);
      }
    })

  }, 1000);

  return () => abortCont.abort();
 }, [url]);

  return {error, isPending, data}

}

export default useFetch;