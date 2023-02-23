import {React, useState} from 'react'
import axios from 'axios'

function WeatherDisplay() {
    const [location, setLocation] =useState("")
    const [weatherData, setWeatherData] = useState("")
    const [locationError, setError] = useState("")
  
    const updateLocationHander = (e)=>{
        e.preventDefault()
        setLocation(e.currentTarget.value)

    }
    const fetchWeatherHandler = async (e) =>{
        e.preventDefault()
        try{

            const weatherResponse = await axios.get(`http://localhost:4000/${location}`)
            setError("")
            setLocation("")
            setWeatherData(weatherResponse.data)
            
          
        } catch(error){
            setWeatherData("")
            setError(`Can not find the weather for ${location}. Please try again :)`)
        }
    }
    console.log(weatherData)
  return (
        <div>
            <form onSubmit={fetchWeatherHandler}>
                <input 
                type="text"
                value = {location}
                onChange = {updateLocationHander}
                />
                <button type='submit'>Button</button>
                
            </form>
            <div>{weatherData !=="" ? weatherData?.location.name: "Enter Location"}</div>
            <div>{locationError ? locationError : ""}</div>
            
        </div>
    )
}

export default WeatherDisplay