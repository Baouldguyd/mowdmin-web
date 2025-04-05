import React from 'react'
import EventsHeroPage from './EventsHeroPage'
import Register from './Register'
import Concert from './Concert'
import ConcertPage from './ConcertPage'
import Supper from './Supper'

const Eventspage = () => {
  return (
    <div className='flex flex-col '>
        <EventsHeroPage/>
        <Register/>
        <ConcertPage/>
        <Supper/>
    </div>
  )
}

export default Eventspage