import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'


function NavBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);
 
  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to='/' className='logo'>
          <div>s_<spna style={{color:'rgba(15, 116, 248, 0.541)'}}>SAM.</spna></div>
      </Link>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/project'>Project</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
      </ul>

      <div className='hambuger' onClick={handleClick}>
        {click ? (<FaTimes size={20}  style={{color: 'white', cursor: 'pointer'}}/>) : (<FaBars size={20}  style={{color: 'white', cursor: 'pointer'}}/>)}
      </div>
    </div>
  )
}

export default NavBar