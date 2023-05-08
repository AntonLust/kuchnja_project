import React from 'react'
// import Subheading from './Subheading'
import './AboutUs.css'
import aboutimg from '../assets/peppermill.png'

function AboutUs() {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center"></div>
    {/* Ich mache kein G im Hintergrund */}
    <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
            <h1 className='headtext__cormorant'>About us</h1>
            <p className="p__opensans">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <button type='button' className='custom__button'>Know more</button>
        </div>

        <div className="app__aboutus-content_peppermill flex__center">
        <img src={aboutimg} alt="pepper mill img" />
        </div>

        <div className="app__aboutus-content_history">
            <h1 className='headtext__cormorant'>History</h1>
            <p className="p__opensans">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <button type='button' className='custom__button'>Know more</button>
        </div>
    </div>
    </div>
  )
}

export default AboutUs