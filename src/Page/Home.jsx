import React from 'react'
import HeroHome from '../Components/HomePage/HeroHome'
import Navbar from '../Components/Layouts/Navbar'
import PartnerHome from '../Components/HomePage/PartnerHome'
import LayananHome from '../Components/HomePage/LayananHome'
import ManfaatHome from '../Components/HomePage/ManfaatHome'
import TargetHome from '../Components/HomePage/TargetHome'
import FaqHome from '../Components/HomePage/FaqHome'
import LocHome from '../Components/HomePage/LocHome'

const Home = () => {
  return (
    <div>
      <HeroHome />
      <TargetHome />
      <LayananHome />
      <ManfaatHome />
      <FaqHome />
      <LocHome />
    </div>
  )
}

export default Home