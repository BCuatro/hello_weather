import {React, useState} from 'react'
import axios from 'axios'

function WeatherDisplay() {
    const [location, setLocation] = useState("")
    const [weatherData, setWeatherData] = useState("")
    const [locationError, setError] = useState("")
    const locationHandler =(e) =>{

    }
    const fetchWeatherHandler = async (place) =>{
        try{

            const weatherResponse = await axios.get(`/${place}`)
            setWeatherData(weatherResponse)
            setError("")
        } catch(error){
            setError(`Can not find the weather for ${location}. Please try again :)`)
        }
    }
  return (
    <div>WeatherDisplay</div>
  )
}

export default WeatherDisplay