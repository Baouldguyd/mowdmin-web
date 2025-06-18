"use client";
import React from 'react'
import Heropage from './Heropage'
import ValuesPage from './ValuesPage'
import ChurchMinistries from './ChurchMinistries'
import Founder from './Founder'
import JoinUs from './JoinUs'
import NewsLetter from './NewsLetter'
import AboutUs from './AboutUs';

const Homepage = () => {
  return (
    <div className='h-auto flex flex-col gap-6'>
        <Heropage/>
        <AboutUs/>
        <ValuesPage/>
        <ChurchMinistries/>
        <Founder/>
        <JoinUs/>
        <NewsLetter/>
    </div>
  )
}

export default Homepage;