import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Button } from './Button';
import Footer from './Footer'

const ForecastContainer = styled.div`
    display:flex;
    margin: 10px 5%;
    overflow: scroll;

    @media (max-width: 569px){
        display:grid;
        grid-template-columns:repeat(1, 1fr);
    }
   
`;

const  DayForecastContainer= styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    margin: 20px 1%;
    min-width:200px;
    background-color: rgba(255, 255, 255);
    border-radius:5px;
    padding:20px 10px;
    box-shadow: 0px 3px 5px black;

    color: rgba(28, 27, 27);
    
    font-size:1em;
    

`;
const SeeWeatherForecast =styled.button`
    background: #f1356d;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
`;

const ForecastComponent = ( {lat, lon} ) => {
    const api ={
        key: "3604b1ba5a1968ab01e1c8e3be99e1ec",
        base: "https://api.openweathermap.org/data/2.5/"
      }
    
    //const {forecast} = useFetchWeather(`${api.base}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely&units=metric&appid=${api.key}`);
    const [latitude,setLatitude] =useState(lat);
    const [longitude,setLongitude] =useState(lon);
    const [dailyForecast, setDailyForecast]=useState(null);
    
    const handleForecast= ()=>{
        setLatitude(lat);
        setLongitude(lon);
    }



    const daysOfWeek =[
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]

    const getDay = (timeStamp)=>{
        return `${new Date(timeStamp * 1000).getDay()}`  // retrun 0~6 which means Sun. to Sat.
    }
    const getDate =(timeStamp)=>{
        return `${new Date(timeStamp * 1000).getDate()}`  
    }

    const getM =(timeStamp)=>{
        return `${new Date(timeStamp * 1000).getMonth()}`  // retrun 0-11
    }
    
    
    useEffect(()=>{

        fetch(`${api.base}onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely&units=metric&appid=${api.key}`)
        .then(res=>{ 
          console.log(res);
          return res.json()
        }).then((data)=>{
          console.log(data);
          console.log(data.daily);
          console.log(data.daily[0].temp.max);
          console.log(data.daily[0].temp.min);
          console.log(data.daily[0].weather[0].description);
          console.log(data.daily[0].weather[0].icon);

        setDailyForecast(data.daily)
        // setDailyForecast(data.daily.map((df)=>{
        //     return {
        //       min: df.temp.min.Value,
        //       max:df.temp.max.Value,
        //       description: df.weather[0].description.Value,
        //       icon:df.weather[0].icon.Value,
        //     }
        // }))
      
        }).catch(err=>{  
          console.log(err.message);
          })
      
    },[latitude,longitude ])
    

    return (
        <>
            {/* for test
            <h3>{lat}</h3>
            <h3>{latitude}</h3>
            <h3>{lon}</h3>
            {!dailyForecast && <h3>nothing</h3>}
            {latitude==lat && longitude==lon?   <h3>yes</h3> : <h3>nope</h3>} */}
        
        <ForecastContainer>
             
        
            {latitude==lat && longitude==lon && dailyForecast 
            
            ? dailyForecast.map((f,index)=>{

                const iconUrl = `http://openweathermap.org/img/w/${f.weather[0].icon}.png`

                return( 
                    <DayForecastContainer key={index} >
                        <h3> { getDate(f.dt)} { months[getM(f.dt)]}</h3>
                        <h3>{ daysOfWeek[getDay(f.dt)]}</h3>
                        <img src={iconUrl}></img>  
                        <h3>H:{ Math.round(f.temp.max)}&#8451;  L:{ Math.round(f.temp.min) }&#8451; </h3>
                        <h4>{ f.weather[0].description }</h4>
                                      
                    </DayForecastContainer>
                )
              })
            :<Button
                   
                        buttonSize='btn--large'
                        onClick={handleForecast}
                    >
                        see weekly forecast
            </Button>
        }
            
        </ForecastContainer>

        
        </>
    )
}

export default ForecastComponent
