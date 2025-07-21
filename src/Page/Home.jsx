import React from 'react'
import HeroHome from '../Components/HomePage/HeroHome'
import Navbar from '../Components/Layouts/Navbar'
import PartnerHome from '../Components/HomePage/PartnerHome'
import LayananHome from '../Components/HomePage/LayananHome'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroHome />
      <PartnerHome />
      <LayananHome />
    </div>
  )
}

export default Home