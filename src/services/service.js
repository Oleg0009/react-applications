import axios from "axios";
import {useEffect, useState} from 'react';

 export const useAxiosPost = (url, payload) => {
     console.log(useState);
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      axios
        .post(url, payload)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
        .finally(() => setLoaded(true));
    }, []);
  
    return { data, error, loaded };
};


export const useAxiosGet= (url) => {
   const [data, setData] = useState(null);
   const [error, setError] = useState("");
   const [loaded, setLoaded] = useState(false);
 
   useEffect(() => {
     axios
       .get(url)
       .then((response) => setData(response.data))
       .catch((error) => setError(error.message))
       .finally(() => setLoaded(true));
   }, []);
 
   return { data, error, loaded };
};
