import React, {createContext } from "react";
import axios from "axios";
import { useEffect, useState} from "react";

export const NewsContext = createContext();

export const FetchNews = (props) => {
  const [data, setData] = useState();
  const apiKey = "efdf382b35b2436a8e2f1ed16fe7f9fc";

  const URL = 'https://current-news.p.rapidapi.com/news'
  const options = {
    headers: {
      'X-RapidAPI-Host': 'current-news.p.rapidapi.com',
      'X-RapidAPI-Key': '36d0287890msh9909e4f0304fb9ap169b23jsne7e772bb61a5'
    }
  }

  useEffect(() => {
    axios.get(URL, options)
      // .then((res) => console.log(res))
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

