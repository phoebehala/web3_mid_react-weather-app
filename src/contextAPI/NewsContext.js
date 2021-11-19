import React, {createContext } from "react";
import axios from "axios";
import { useEffect, useState} from "react";

export const NewsContext = createContext();

export const FetchNews = (props) => {
  const [data, setData] = useState();
  const apiKey = "efdf382b35b2436a8e2f1ed16fe7f9fc";


  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

