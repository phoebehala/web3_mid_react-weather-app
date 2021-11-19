import styled  from "styled-components";

import React from 'react'

import { VscPerson } from 'react-icons/vsc';
import { BiWind } from 'react-icons/bi';
import { FiSunset} from 'react-icons/fi';
import { FiSunrise } from 'react-icons/fi';
import { WiHumidity } from 'react-icons/wi';

import ForecastComponent from "./ForecastComponent";



// export const WeatherInfoIcons = {
//     sunset: "/icons/temp.svg",
//     //sunrise: "/icons/temp.svg",
//     sunrise: FiSunrise,
//     humidity: "/icons/humidity.svg",
//     wind: "/icons/wind.svg",
//     pressure: "/icons/pressure.svg", 

// };


const iconStyle = { color: "black", fontSize: "2.5em" }
const WeatherInfoIcons = (name)=>{

    switch(name) {
        case 'sunrise':
          return <FiSunrise  style={iconStyle} />;
        case 'sunset':
          return <FiSunset  style={iconStyle} />;
        case 'humidity':
          return <WiHumidity  style={iconStyle} />;
        case 'wind':
          return <BiWind  style={iconStyle} />;
        case 'feels_like':
          return <VscPerson   style={iconStyle} />;
        default:
          return 'N/A';
      }
}

const TodayWeather  =styled.div`
    position:relative;
    top:550px;
    
    
`;

const WeatherContainer =styled.div`
    display: flex;
    width: 50%;
    margin: 30px auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   
`;

const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 1em;

  & span {
    font-size: 1.7em;
   

   
  }
`;

const Location = styled.div`
  margin: 15px auto;
  text-align:center;
  text-transform: capitalize;
  font-size: 2em;
  font-weight: bold;
  
  & h4{
    font-size: 0.4em;
  }
`;



const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

/* WeatherInfoContainer */
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 70%;
  margin:50px auto;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

/* inside of WeatherInfoComponent */
const InfoContainer = styled.div`
  display: flex;
  margin: 20px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.h3`
  width: 36px;
  height: 36px;

  border:2px yellow
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1em;
  margin-left: 25px;

  & span {
    font-size: 1em;
    text-transform: capitalize;

 
  }
`;


const SeeWeatherForecast =styled.button`
    background: #f1356d;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    
    return (
        <InfoContainer>
            <InfoIcon > {WeatherInfoIcons(name)}  </InfoIcon>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};


const WeatherComponent = ({data}) => {
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    // const style = { color: "white", fontSize: "1.5em" }

    // if data.weather[0].icon contains 'd', which means it's day otherwise night
    const isDay = data.weather[0].icon?.includes('d')  
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }

    const latitude = data.coord.lat;
    const longitude = data.coord.lon;


   
    
    return (
        <>
        <TodayWeather>
            <WeatherContainer>
                <Condition> <span> H:{Math.round(data.main.temp_max)} &#8451; &nbsp; L:{Math.round(data.main.temp_min)} &#8451;</span></Condition> 
                {/* <h3><VscPerson style={style}/></h3>
                <h3>< BiWind style={style}/></h3>
                <h3>< FiSunset style={style}/></h3>
                <h3><WeatherInfoIcons.sunrise style={style}/></h3> */}
                <WeatherIcon src={iconUrl} alt="icon" />
            </WeatherContainer> 

            <Location>{data.name},  {data.sys['country']} 
                <h4>( latitude: {latitude} / longitude: {longitude} )</h4>
            </Location> 


        
            <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay? "sunset":"sunrise"} value={`${getTime(data.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name="humidity" value={data.main.humidity}/>
                <WeatherInfoComponent name="wind" value={data.wind.speed}/>
                <WeatherInfoComponent name="feels_like" value={ Math.round(data.main.feels_like)} />
            </WeatherInfoContainer>
  
            <ForecastComponent lat={latitude} lon={longitude} />
        </TodayWeather>   


        </>
    )
};

export default WeatherComponent
