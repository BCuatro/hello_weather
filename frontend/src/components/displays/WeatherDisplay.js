import React from 'react'

const WeatherDisplay = ({weather, temperatureUnit}) => {
  const temperatureInF = weather ?  {
    'current' : Math.round(weather.current.temp_f),
    'min':  Math.round(weather.forecast.forecastday[0].day.mintemp_f),
    'max': Math.round(weather.forecast.forecastday[0].day.maxtemp_f)
  } : {}
  const temperatureInC = weather ?  {
    'current' : weather.current.temp_c,
    'min':  weather.forecast.forecastday[0].day.mintemp_c,
    'max': weather.forecast.forecastday[0].day.maxtemp_c
  } : {}


  return (
    <div className='font-shrikhand'>
      <div className ='flex w-full justify-between p-3'>
        <div className = 'w-3/4 text-color-F1F8FF'> 
              <div className = 'text-color-F1F8FF text-2xl'> {weather ? weather.location.name + ' , ' +  weather.location.region : ''} </div>
              <div> {weather ? weather.location.country :''} </div>
        </div>

        <div className='flex-row'>
          <div className ='w-3/4'> <img className= 'h-auto w-full' src = {weather ? weather.current.condition.icon: ''} alt =''></img></div>
          <div className='text-center text-color-EEEEEE'>{weather ? weather.current.condition.text : ''}</div>
        </div>

      </div>

      <div className= 'text-center w-full'>
        <div className ='text-xl text-color-F1F8FF'> Currently:</div>
        <div class='text-4xl text-color-EEEEEE font-play'>{temperatureUnit === 'F'? temperatureInF?.current : temperatureInC?.current} °{temperatureUnit}</div>
      </div> 

      <div className='flex w-full justify-around p-0 text-center'>
        <div className='w-1/3 text-center'>
          <div className ='text-xl text-color-F1F8FF'> Low</div>
          <div className='text-2xl text-color-EEEEEE font-play'>{temperatureUnit === 'F'? temperatureInF?.min : temperatureInC?.min} °{temperatureUnit} </div>
        </div>

        <div className='w-1/3'>
          <div className ='text-xl text-color-F1F8FF'> High</div>
          <div className='text-2xl text-color-EEEEEE font-play'>{temperatureUnit === 'F'? temperatureInF?.max : temperatureInC?.max} °{temperatureUnit} </div>
        </div>

      </div>

      <div className= 'flex-row text-center w-full pt-3'>
        <div className ='text-xl text-color-F1F8FF'> Possible Condition</div>
        <div className='flex justify-evenly items-center'>
          <div className=' text-color-EEEEEE'>{weather ? weather.forecast.forecastday[0].day.condition.text : ""} </div>
          <div><img className= 'h-24 w-24' src= {weather ? weather.forecast.forecastday[0].day.condition.icon : ""} alt=""></img> </div>
        </div>
        
      </div>    
        
    </div>
  )
}

export default WeatherDisplay