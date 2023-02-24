import React from 'react'

const Display = ({weather}) => {
    
  return (
    <div>
      <div className ='flex w-full justify-between p-3'>
        <div className = "text-2xl w-3/4 text-color-F1F8FF"> 
              <div className = "text-color-F1F8FF"> {weather ? weather.location.name + " , " +  weather.location.region : ""} </div>
              <div> {weather ? weather.location.country :""} </div>
        </div>
        <div className="flex-row">
          <div className ="w-full"> <img className= "h-auto w-full" src = {weather ? weather.current.condition.icon: ""} alt =""></img></div>
          <div className="text-center  text-color-EEEEEE">{weather ? weather.current.condition.text : ""}</div>
        </div>
      </div>

      <div className= 'text-center w-full'>
        <div className ='text-xl text-color-F1F8FF'> Currently:</div>
        <div class='text-4xl text-color-EEEEEE'>{weather ? Math.round(weather.current.temp_f) +`ºF` : ""}</div>
      </div> 
      <div className="flex w-full justify-around p-0 text-center">
        <div className='w-1/3 text-center'>
          <div className ='text-xl text-color-F1F8FF'> Low</div>
          <div className='text-2xl text-color-EEEEEE'>{weather ? weather.forecast.forecastday[0].day.mintemp_f : ""} </div>
        </div>

        <div className='w-1/3'>
          <div className ='text-xl text-color-F1F8FF'> High</div>
          <div className='text-2xl text-color-EEEEEE'>{weather ? weather.forecast.forecastday[0].day.maxtemp_f : ""} </div>
        </div>
      </div>
      <div className= 'flex-row text-center w-full pt-3'>
        <div className ='text-xl text-color-F1F8FF'> Possible Condition</div>
        <div className='flex justify-evenly items-center'>
          <div className=' text-color-EEEEEE'>{weather ? weather.forecast.forecastday[0].day.condition.text : ""} </div>
          <div><img className= "h-24 w-24" src= {weather ? weather.forecast.forecastday[0].day.condition.icon : ""} alt=""></img> </div>
        </div>
        
      </div>

      
            
        
    </div>
  )
}

export default Display