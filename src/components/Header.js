import React from 'react'
import Logo from '../assets/img/Star_Wars_Logo.svg'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className='header'>

      <div className='header-logo'>
        <Link to={`/`}>
          <img src={Logo} className='logo' alt='Star Wars Logo' />
        </Link>
      </div>

      <Link to={`/starships`}>
      <div className='navs'>
        spaceship
      </div>
      </Link>
    </div>
  )
}

export default Header