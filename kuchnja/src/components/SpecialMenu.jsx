import React from 'react'
import './SpecialMenu.css'
import data from './data'
import menuImg from '/images/peppermill.png'
import MenuItem from './MenuItem'
import { Link } from 'react-router-dom'

function SpecialMenu() {
  return (
    <div className='app__specialMenu flex__center section__padding'>SpecialMenu
    <div className="app__specialMenu-title">
        <h1 className='headtext__cormorant'>Todays Special</h1>
        <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_wine flex__center">
                <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
                <div className="app__specialMenu_menu_items">
                {data.wines.map((wine, index)=>(
                    <MenuItem key={wine.title+index} title ={wine.title} price={wine.price}tags={wine.tags}/>
                ))}
                </div>
            </div>
            <div className="app__specialMenu-menu-img">
                <img src={menuImg} alt="menu img" />
            </div>

            <div className="app__specialMenu-menu_cocktails flex__center">
                <p className='app__specialMenu-menu_heading'>Cocktails</p>
                <div className="app__specialMenu_menu_items">
                {data.cocktails.map((cocktail, index)=>(
                    <MenuItem key={cocktail.title+index} title ={cocktail.title} price={cocktail.price}tags={cocktail.tags}/>
                    ))}
                </div>
            </div>
        </div>
        <div className="" style={{marginTop:'15px'}}>
            <button type='button' className='custom__button' id='app__specialMenu-button'><Link to="/contact">Book Now</Link></button>
        </div>
    </div>


    </div>
  )
}

export default SpecialMenu