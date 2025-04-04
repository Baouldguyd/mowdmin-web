import React from 'react'
import EventsHeroPage from './EventsHeroPage'
import Register from './Register'

const Eventspage = () => {
  return (
    <div className='flex flex-col '>
        <EventsHeroPage/>
        <Register/>
    </div>
  )
}

export default Eventspage