import React from 'react'
import Onboarding from './onboarding'
import Services from './services'
import Category from './category'
import Explore from './explore'
import Featured from './featured'
import TopSelling from './top-selling'
import CustomerSays from './customer-says'

const Home = () => {
  return (
    <div>
      <Onboarding/>
      <Services/>
      <Category/>
      <Explore/>
      <Featured/>
      <TopSelling/>
      <CustomerSays/>
    </div>
  )
}

export default Home
