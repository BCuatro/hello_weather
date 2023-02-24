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
            <div class="box-border h-[450px] w-[600px] p-4 border-4 bg-color-425C81"> 
                
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
                className ="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"
                type='submit'>Search</button>
                
            </form>
            
        </div>
    )
}

export default WeatherDisplay