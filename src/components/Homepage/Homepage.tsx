import React from 'react'
import Heropage from './Heropage'
import ValuesPage from './ValuesPage'
import ChurchMinistries from './ChurchMinistries'
import Founder from './Founder'
import JoinUs from './JoinUs'

const Homepage = () => {
  return (
    <div className='h-auto flex flex-col gap-6'>
        <Heropage/>
        <ValuesPage/>
        <ChurchMinistries/>
        <Founder/>
        <JoinUs/>
    </div>
  )
}

export default Homepage