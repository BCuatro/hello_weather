import React from 'react'

const Display = ({weather}) => {
    const weekForecast = weather ? weather.forecast.forecastday : []
    console.log(weekForecast[0].day.mintemp_f)

  return (
    <div>
        <div className = "text-2xl"> 
            <div> {weather ? weather.location.name + " , " +  weather.location.region : ""} </div>
            <div> {weather ? weather.location.country :""} </div>
        </div>
        <div>Current Weather: {weather ? weather.current.temp_f + " F" : ""}</div>
        <div>{weather ? weather.current.condition.text : ""}</div>
        <div> <img src = {weather ? weather.current.condition.icon: ""} alt =""></img>
        <div>
            <div>{weekForecast !== [] ? weekForecast[0].day.mintemp_f : ""} </div>
            <div>{weekForecast !== [] ? weekForecast[0].day.maxtemp_f : ""} </div>
            <div>{weekForecast !== [] ? weekForecast[0].day.condition.text : ""} </div>
            <div><img src= {weekForecast !== [] ? weekForecast[0].day.condition.icon : ""} alt=""></img> </div>

        </div>
            
            
        </div>
    </div>
  )
}

export default Display