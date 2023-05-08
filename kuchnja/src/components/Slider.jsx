import React, { useContext } from 'react';
import { ThemeContext } from '../context/ContextComp'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import './Slider.css'
import Subheading from './Subheading';
import rightimg from '../assets/right-arrow.svg'
import leftimg from '../assets/left-arrow.svg'

function Slider() {
  const {menu, setMenu, index, setIndex } = useContext(ThemeContext)

  return (
   
    <div className='app_menu-section section__padding'>
        <div className='app_menu-upper'>
          <Subheading title='Enjoy the Taste'/>
<h1 className='headtext__cormorant'>Menu</h1>
<p className="p__opensans" style={{margin:'2rem 0'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
        <div className="section-center">
            {menu.map((person, personIndex)=>{
                const {id, image, name} = person;
                let position = 'nextSlide';
                if(personIndex === index){
                    position = 'activeSlide'
                }
                if(personIndex === index -1 || (index === 0 && personIndex === menu.length -1)){
                    position = 'lastSlide'
                }
                return(
                    <article className={position} key={id}>
                        <img src={image} alt={name} className="person-img" />

                    </article>
                )
            })}
            <button className='prev' onClick={()=>setIndex(index-1)}>
              <img className='app__right_img' src={leftimg} alt="leftt arrow img"  />
            </button>
            
            <button className='next' onClick={()=>setIndex(index+1)}>
              <img className='app__right_img' src={rightimg} alt="right arrow img"  />
            </button>
            
        </div>
        <button type='button' className='custom__button' id='app__menu-button'>Know More</button>


        



    </div>
  )
}

export default Slider