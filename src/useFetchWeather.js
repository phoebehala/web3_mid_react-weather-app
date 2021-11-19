// custom hook
import { useState, useEffect } from 'react';

const useFetchWeather = (url) => {

    const [data, setData] = useState( null );

    // store the state, so we can output the error to the browser
    const [error, setError] = useState(null);

    useEffect(()=>{
        // `${api.base}weather?q=${query}&units=metric&appid=${api.key}`
        fetch(url)
        .then(res=>{ 
          console.log(res);
          if(!res.ok){
            throw Error(`The city couldn't be found `)
          }
          return res.json()
        }).then((data)=>{
          console.log(data);
          console.log(data.name);
          console.log(data.sys['country']);
          console.log(data.main.temp);
          console.log(data.weather[0].description);
          console.log(data.weather[0].icon);
          
          setData(data);
          setError(null);
          
      
        }).catch(err=>{  
          console.log(err.message);
          setError(err.message);
          })
      
      },[url])

    return{ data, error }
}

export default useFetchWeather
