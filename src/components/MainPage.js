import React from 'react'
import { useNavigate } from "react-router-dom";


const MainPage = () => {

  const navigate = useNavigate();
  const handleNavigate = (starship) => {
    // console.log('you clicked mee')
    navigate(`/starships/`);
  }

  return (
    <>
      <div className="fade">
      </div>
      <div className="star-wars">
        <div className="MainPageText">
          <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory
            against the evil Galactic Empire.</p>
          <p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR,
            an armored space station with enough power to destroy an entire planet.</p>
          <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen
            plans that can save her people and restore freedom to the galaxy…</p>
        </div>
        <button onClick={() =>handleNavigate()} className='MainButton blue'>START DISCOVERING</button>
      </div>
    </>
  )
}

export default MainPage