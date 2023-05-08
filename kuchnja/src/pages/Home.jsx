/* eslint-disable no-unused-vars */
import React from 'react'
import AboutUs from '../components/AboutUs'
import Headern from '../components/Headern'
import Recommendation from '../components/Recommendation'
import Reservation from '../components/Reservation'
import Slider from '../components/Slider'

function Home() {
  return (
    <div>
      <Headern/>
      <AboutUs/>
      <Slider/>
      <Reservation/>
      <Recommendation/>
    </div>
  )
}

export default Home