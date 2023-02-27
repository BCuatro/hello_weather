import {React, useState} from 'react'
import axios from 'axios'
import WeatherDisplay from './displays/WeatherDisplay';
import InitialEnterLocationDisplay from './displays/InitialEnterLocationDisplay';
import ErrorDisplay from './displays/ErrorDisplay';


function Weather() {
    
    const[temperatureUnit, setTemperatureUnit] = useState('F')
    const [location, setLocation] =useState('')
    const [weatherData, setWeatherData] = useState('')
    const [locationError, setError] = useState('')
  
    const updateLocationHander = (e)=>{
        e.preventDefault()
        setLocation(e.currentTarget.value)

    }
    const fetchWeatherHandler = async (e) =>{
        e.preventDefault()
        try{

            const weatherResponse = await axios.get(`http://localhost:4000/${location}`)
            setError('')
            setLocation('')
            setWeatherData(weatherResponse.data)
            
          
        } catch(error){
            setWeatherData('')
            setError(`Can not find the weather for ${location}.`)
        }
    }
    const currentDisplayHandler = () =>{
        if(locationError){
            return <ErrorDisplay 
            error = {locationError}
            />
        }
        else if(weatherData){
            return <WeatherDisplay
             weather ={weatherData}
             temperatureUnit = {temperatureUnit}
             />
         } else{
            return <InitialEnterLocationDisplay />
         }
    }
    const temperatureUnitHandler =() =>{
        if (temperatureUnit === 'F'){
            setTemperatureUnit('C')
        }else{
            setTemperatureUnit('F')
        }
    }

  return (
        <div >
            <div className = 'flex w-full text-5xl justify-center  line tracking-wider text-color-F1F8FF'>
                <div className ='animate-bounce animation-delay-800'>T</div>
                <div className ='animate-bounce animation-delay-900'>O</div>
                <div className ='animate-bounce animation-delay-1000'>D</div>
                <div className ='animate-bounce animation-delay-1100'>A</div>
                <div className ='animate-bounce animation-delay-1200'>Y</div>
                <div className ='animate-bounce animation-delay-1300'>'</div>
                <div className ='animate-bounce animation-delay-1400'>S</div>
              
               
            </div>
            <div className = 'text-8xl tracking-wide'>WEATHER</div>
            
            <div className='h-[450px] w-[600px] p-4 border-4 border-dashed bg-color-425C81 border-black rounded-2xl mb-3'> 
                <div className='h-full'> {currentDisplayHandler()}</div>
            </div>
            
            <form onSubmit={fetchWeatherHandler}>
                <div className ='flex'> 
                    <input 
                    className ='w-5/6 block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline font-play' 
                    type='text'
                    value = {location}
                    placeholder = {'ex. New York or New York, NY or 10037'}
                    onChange = {updateLocationHander}
                    />
                    <button 
                        className ='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 ml-2'
                        disabled={location.replace(/ /g, '').length === 0}
                        type='submit'>
                            Search
                    </button>
                </div>
               
            </form>
            <button 
                className ='w-36 text-play text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 justify-center text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mt-2 mr-2 mb-2'
                onClick = {() => temperatureUnitHandler()}>{temperatureUnit === 'F' ? 'Fahrenheit' : 'Celsius'}
            </button>            
        </div>
    )
}

export default Weather