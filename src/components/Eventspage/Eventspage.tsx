import React from 'react'
import EventsHeroPage from './EventsHeroPage'
import Register from './Register'
import Concert from './Concert'
import ConcertPage from './ConcertPage'

const Eventspage = () => {
  return (
    <div className='flex flex-col '>
        <EventsHeroPage/>
        <Register/>
        <ConcertPage/>
    </div>
  )
}

export default Eventspage