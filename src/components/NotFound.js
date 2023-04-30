import React from 'react'
import notfound from '../assets/img/404.png'
import { useNavigate } from "react-router-dom";


const NotFound = () => {

  const navigate = useNavigate();
  const handleNavigate = (starship) => {
    // console.log('you clicked mee')
    navigate(`/starships/`);
  }


  return (
    <div className='notfoundpage'>
      <div><h1>4</h1><img src={notfound}/><h1>4</h1></div>
      <h3>Great shot kid. That was one in a million.</h3>
      <button onClick={() =>handleNavigate()} className='button1'>LET'S GET YOU HOME</button>
    </div>
  )
}

export default NotFound