import React from 'react'
import { useState } from 'react'
import '../App.css'
import './Home.css'
import WeatherComponent from '../components/WeatherComponent'
import useFetchWeather from '../useFetchWeather'
import {Button} from '../components/Button';
import Footer from '../components/Footer';


const Home = () => {
    const api ={
        key: "3604b1ba5a1968ab01e1c8e3be99e1ec",
        base: "https://api.openweathermap.org/data/2.5/"
      }
    
    const [city, setCity] =useState(null);
    const [query, setQuery] = useState('vancouver');

    const {data, error} = useFetchWeather(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`);
    

    const fetchWeather = (e)=>{
        e.preventDefault();

        console.log(city);
        setQuery(city)
    }
    return (
        <div>
            <main>
                
                <form className="search-box" onSubmit={fetchWeather}>
                    <input className="search-bar"
                        type="text"
                        placeholder="Searching......"
                        onChange={(e)=>{
                            console.log(e);
                            setCity(e.target.value)

                        }}
                    ></input>
                    <Button type="submit"
                     
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Search
                    </Button>
            

                </form>
            
            
            
            {error && <div className="error-message">{ error }</div>} 
                
                
           
            
            {data &&  <>
                
                <div className="location-box">
                    <div className="location">{data.name},  {data.sys['country']} </div>
                    
                </div>

                <div className="weather-box">
                    <hr className="line"/>
                    <div className="temp" style={data.main.temp>20 ? {color:'red'}:{color:'white'}}> {Math.round(data.main.temp)} <span> &#8451;</span></div>
                    <div className="weather">{data.weather[0].description}</div>
                </div>
                
                <WeatherComponent data={data}/>
                
                
                
                
            </>}
           
           </main>
           <div className="patch"> 
        
           </div>        
           

           <Footer />  
            

            
            
        </div>
    )
}

export default Home
