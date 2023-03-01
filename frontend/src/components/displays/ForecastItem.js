import React from 'react'

const ForecastItem =({forecastDay, temperatureUnit}) =>{
    const temperatureInF = forecastDay ?  {
        'min':  Math.round(forecastDay.day.mintemp_f),
        'max': Math.round(forecastDay.day.maxtemp_f)
      } : {}
      const temperatureInC = forecastDay ?  {
        'min':  forecastDay.day.mintemp_c,
        'max': forecastDay.day.maxtemp_c
      } : {}
  return (
    <div className= 'h-full w-full'>
        <div className = 'h-full flex-col'>
            <div className= 'h-3/4 pt-3'> 
                <div className ='text-center text-xl'> Date: {forecastDay ? forecastDay.date.slice(5) : ""}</div>
                <div className='flex-row'>
                    <div className ='w-full flex justify-center'> <img className= 'h-auto w-20 md:w-24' src = {forecastDay ? forecastDay.day.condition.icon: ''} alt =''></img></div>
                    <div className='text-center text-color-EEEEEE'>{forecastDay ? forecastDay.day.condition.text : ''}</div>
                </div>
            </div>
        
            <div className ='w-full p-2'>
                <div className='flex justify-between'>
                    <div className ='text-xl text-color-F1F8FF'> Low </div>
                    <div className='text-xl text-color-EEEEEE font-play'>{temperatureUnit === 'F'? temperatureInF?.min : temperatureInC?.min} °{temperatureUnit} </div>
                </div>

                <div className='flex justify-between'>
                    <div className ='text-xl text-color-F1F8FF'> High</div>
                    <div className='text-xl text-color-EEEEEE font-play'>{temperatureUnit === 'F'? temperatureInF?.max : temperatureInC?.max} °{temperatureUnit} </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ForecastItem