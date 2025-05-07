"use client";
import React from 'react'
import Heropage from './Heropage'
import ValuesPage from './ValuesPage'
import ChurchMinistries from './ChurchMinistries'
import Founder from './Founder'
import JoinUs from './JoinUs'
import NewsLetter from './NewsLetter'
// motion

import { motion } from 'framer-motion'
// variants
import { fadeIn } from '@/variants'
import FadeInOnScroll from './FadeInOnScroll';

const Homepage = () => {
  return (
    <div className='h-auto flex flex-col gap-6'>
        <Heropage/>
        <ValuesPage/>
        <ChurchMinistries/>
        <Founder/>
        <JoinUs/>
        <NewsLetter/>
    </div>
  )
}

export default Homepage;