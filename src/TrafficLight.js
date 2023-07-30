//Build a traffic light where the lights switch from green to yellow to red after predetermined 
//intervals and loop indefinitely. Each light should be lit for the following durations:
//Red light: 4000ms, Yellow light: 1000ms, Green light: 3000ms

import React, { useState, useEffect } from 'react'

const TrafficLight = () => {
  const lights = ['red', 'yellow', 'green'];

  const [activeLight, setActiveLight] = useState(lights[0]);

  useEffect(()=>{
    const timer = setInterval(()=>{
      setActiveLight((prev)=>{
        return prev==='red' ? 'green' : prev==='green' ? 'yellow' : 'red';
      })
    }, activeLight==='red' ? 4000 : activeLight==='green' ? 3000 : 1000 )

    return ()=>clearInterval(timer)
  }, [activeLight])

  return (
    <div className='lights'>
        {lights.map(light=><div key={light}
        className={`color ${light===activeLight ? light : ''}`}
        ></div>)}
    </div>
  )
}

export default TrafficLight
