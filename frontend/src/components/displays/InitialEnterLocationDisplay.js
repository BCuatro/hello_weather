import React from 'react'

function InitialEnterLocationDisplay() {
  return (
    <div className = 'flex flex-col items-center justify-center h-full'>
        <h2 className = 'text-2xl md:text-3xl text-color-F1F8FF'> Please Enter Location</h2>
        <p className='text-xs md:text-lg font-play'> For better accuracy please include state/country or use zipcode</p>
    </div>
  )
}

export default InitialEnterLocationDisplay