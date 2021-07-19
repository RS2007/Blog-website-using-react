import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
	  const abort = new AbortController();
    fetch(url,{signal: abort.signal})
      .then((res) => {
        if (!res.ok) {
          throw Error("Unable to recieve data");
        }
        //console.log(res);
		
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
		console.log(data)
        setIsPending(false);
      })
      .catch((err) => {
		  if(err.name === "AbortError"){
			  console.log('Aborted')
		  }else{
			setError(err.message);
			setIsPending(false);
		  }
        
      })
	  return ()=>abort.abort()
  }, [url]);
  return { blogs, isPending, error };
};

export default useFetch;
