import React from 'react'
import ForecastItem from './ForecastItem'

const ForecastDisplay = ({weather, temperatureUnit}) => {
  
  return (
    <div className= 'h-full'>
        <div className= 'w-full text-2xl md:text-3xl text-center'> 3 Day Forcast</div>
        <div className = 'w-full  text-color-F1F8FF text-center p-1'> 
              <div className = 'text-xl md:text-2xl ' > {weather ? weather?.location.name + ' , ' +  weather?.location.region : ''} </div>
              <div className = 'text-lg md:text-xl'> {weather ? weather?.location.country :''} </div>
        </div>
        <div className='flex w-full h-3/4 justify-evenly' >
            <div className='w-1/3 mr-0.5 ml-0.5 rounded-t-3xl border-EEEEEE border-2'>
                {weather ? <ForecastItem 
                forecastDay={weather.forecast.forecastday[0]}
                temperatureUnit ={temperatureUnit}
                />: ""}
            </div>
            <div className='w-1/3 mr-0.5 ml-0.5 rounded-t-3xl border-EEEEEE border-2'>
                {weather ? <ForecastItem 
                forecastDay={weather.forecast.forecastday[1]}
                temperatureUnit ={temperatureUnit}
                />: ""}
            </div>
            <div className='w-1/3 mr-0.5 ml-0.5 rounded-t-3xl border-EEEEEE border-2'>
                {weather ? <ForecastItem 
                forecastDay={weather.forecast.forecastday[2]}
                temperatureUnit ={temperatureUnit}
                />: ""}
            </div>
           
            
        </div>
        
    </div>
  )
}

export default ForecastDisplay