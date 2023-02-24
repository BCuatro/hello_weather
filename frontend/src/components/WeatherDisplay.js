import {React, useState} from 'react'
import axios from 'axios'
import Display from './Display';

function WeatherDisplay() {
    const[temperatureUnit, setTemperatureUnit] = useState("F")
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
            <h2>WEATHER</h2>
            <div class="box-border h-96 w-96 p-4 border-4 "> 
                
                <div>{locationError ? locationError : ""}</div>
                <div> <Display 
                weather =  {weatherData}
                />
                </div>
            </div>
            <form onSubmit={fetchWeatherHandler}>
                <input 
                className ="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value = {location}
                placeholder = {"Enter Location"}
                onChange = {updateLocationHander}
                />
                <button 
                className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
                type='submit'>Search</button>
                
            </form>
            
        </div>
    )
}

export default WeatherDisplay