"use client";
import React from 'react'
import EventsHeroPage from './EventsHeroPage'
import Register from './Register'
import ConcertPage from './ConcertPage'
import Supper from './Supper'
import Baptism from './Baptism'
import PastEvents from './PastEvents'


const Eventspage = () => {
  return (
    <div className='flex flex-col h-auto '>
        <EventsHeroPage/>
        <Register/>
        <ConcertPage/>
        <Supper/>
        <Baptism />
        <PastEvents/>
    </div>
  )
}

export default Eventspage;