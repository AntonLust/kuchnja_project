import React from 'react'
import { useState } from 'react'
import './Navbar2.css'
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { BrowserRouter as Router, Link } from 'react-router-dom';


export default function Navbar2() {
    const [showLinks, setShowLinks] = useState(false)

    const handleLinkClick = () => {
      setShowLinks(false)
  }

  return (
      <div>
          <nav className='app__navbar'>
              <div className="app__navbar-logo">
                  Kuchnja
              </div>

              <ul className="app__navbar-links" id={showLinks ? 'hidden' : ""}>
                  <li className='p__opensans'><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                  <li className='p__opensans'><Link to="/about" onClick={handleLinkClick}>About</Link></li>
                  <li className='p__opensans'><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
                  <li className='p__opensans'><Link to="/reviews" onClick={handleLinkClick}>Reviews</Link></li>
                  <li className='p__opensans'><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
              </ul>      
            

        <div className="app__navbar-login">
        <li className='p__opensans'><Link to="/contact">Log In / Register</Link></li>
        <li className='p__opensans'><Link to="/contact">Book Table</Link></li>
        </div>

        <CIcon icon={icon.cilMenu} size="custom-size" className='app__navbar-burger'onClick={()=>setShowLinks(!showLinks)}/>
        
        {/* das gegenteil von showLinks */}
        </nav>

    </div>
  )
}
