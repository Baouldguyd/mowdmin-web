import React from 'react'
import PartnersHero from './PartnersHero'
import PartnersForm from './PartnersForm'
import Locate from './Locate'
import PartnersNewHero from './PartnersNewHero'

const PartnersPage = () => {
  return (
    <div>
        {/* <PartnersHero/> */}
        <PartnersNewHero/>
        <PartnersForm/>
        <Locate/>
    </div>
  )
}

export default PartnersPage;