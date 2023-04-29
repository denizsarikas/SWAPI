import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import LoadingGif from '../assets/img/StarWarsLightSaber.gif'
import image from '../data/Image.json'
import { LazyLoadImage } from "react-lazy-load-image-component";



function Card({ filteredStarships }) {

  // console.log('card.js: image->', image)
  // console.log('card.js: image data->', image[0].name)


  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(false);
  }, [filteredStarships]);

  const handleNavigate = (starship) => {
    // console.log('you clicked mee')
    navigate(`/starships/${starship.name}`);
  }

  //  console.log('card:', filteredStarships)
  return (
    <div className="MainCard">
      {isLoading &&
        <div>
          <img src={LoadingGif} alt='light-saber-loading' />
          <p>Loading...</p>
        </div>}
      {filteredStarships && (
        filteredStarships.map((starship, index) => (

          <div className='card' key={index}>
            <div className='info'>
              <div className='name'>{starship.name}</div>
              <hr />
              <div className='model'>{starship.model}</div>
              {/* <div className='divider'></div> */}
              <div className='bio'>
                {starship.manufacturer}
              </div>
              <button onClick={() => handleNavigate(starship)}>See More Details</button>
            </div>
            <img
                className='photo'
                src={image.find(item => item.name === starship.name)?.img}
                alt={starship.name + 'picture'}
              />
            {/* <LazyLoadImage
              src={image.find(item => item.name === starship.name)?.img}
              width={100} height={100}
              className='photo'
              alt={starship.name + 'picture'}
            /> */}
            <Link className='links' to={`/starships/${starship.name}`}>{starship.name}</Link>
          </div>
        ))
      )
      }
    </div >
  )
}

export default Card;

