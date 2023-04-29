import React from 'react'
import Logo from '../assets/img/Star_Wars_Logo.svg'
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className='header'>

      <div className='header-logo'>
        <NavLink to={`/`} activeclassname="active">
          <img src={Logo} className='logo' alt='Star Wars Logo' />
        </NavLink>
      </div>

      <div className='header-logo'>
        <NavLink to={`/starships`} activeclassname="active">
          <h2>STAR</h2>
          <h3>SHIPS</h3>
        </NavLink>
      </div>
    </div>
  )
}

export default Header