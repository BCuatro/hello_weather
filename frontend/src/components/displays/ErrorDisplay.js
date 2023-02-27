import React from 'react'
import sadCloud from '../../images/sad_cloud.gif'

const ErrorDisplay = ({error}) => {
  return (
    <div className='flex flex-col items-center justify-center h-full text-xl'>
        <div className = 'text-color-EEEEEE'>{error}</div>
        <div className = 'text-color-F1F8FF'>Please Try Again :)</div>
        <img  className ='pt-5 h-auto w-36' src ={sadCloud} alt='sad cloud'/>
    </div>
  )
}

export default ErrorDisplay