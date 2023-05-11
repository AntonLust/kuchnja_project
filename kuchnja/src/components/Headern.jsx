import React from 'react'
import Subheading from './Subheading'
import './Headern.css'
import headerimg from '/images/manty.jpg'
import { Link } from 'react-router-dom'

export default function Headern() {
return (
<div className='app__header__wrapper section__padding' id='home'>
<div className="app__wrapper_info">
<Subheading title="Stories of Taste"/>
<h1 className="app__header-h1">The Key to our Kitchen</h1>
<p className="p__opensans" style={{margin:'2rem 0'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
<button type='button' className='custom__button'><Link to="/contact">Book Now</Link></button>


</div>
<div className="app__wrapper_img">
  <img src={headerimg} alt="headern img"  />
</div>
</div>
)
}

