import React from 'react'
import { useContext } from 'react';
import { NewsContext } from '../contextAPI/NewsContext';
import './NewsComponent.css';


const News = () => {

    const {data} = useContext(NewsContext)
    console.log(data);

    return (
        <div className="newsComponent-container">
            <h2 className="head__text">Top business headlines right now</h2>
            <div className="all__news">
            {data ? data.map((eachNews, index)=>{
    
                return (
                     <div className="news" key={index}>
           
                        <h2 className="news__title">{eachNews.title}</h2>
                        <img className="news__img" src={eachNews.urlToImage}  alt="image" style={{ width: "100%" }} />
                        <p className="news__desc">{eachNews.description}</p>
                        <span className="news__author">{eachNews.author}</span> <br />
                        <span className="news__published">{eachNews.publishedAt}</span>
                        <span className="news__source">{eachNews.source.name}</span>
                        <button className="news__button" ><a href={eachNews.url} target="_blank" className="news__link" style={{ textDecoration: "none"}}>Read More</a></button>

                     </div>
                )
            }):  <h4>is loading...</h4> }
            </div>
           
        </div>
    )
}

export default News
