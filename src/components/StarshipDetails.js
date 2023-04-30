import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useStarship } from '../context/StarshipContext'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import image from '../data/Image.json'
import LoadingGif from '../assets/img/StarWarsLightSaber.gif'


const StarshipDetails = () => {


  const { id } = useParams();
  const { starship } = useStarship()
  const [filteredStarships, setFilteredstarships] = useState()
  const [filteredImage, setFilteredImage] = useState()
  const [loading, setLoading] = useState(true);

  


  function Model(props) {
    const { scene } = useGLTF(`/assets/models/${id}.glb`);
    return <primitive object={scene} {...props} />
  }

  const navigate = useNavigate();
  const handleNavigate = (starship) => {
    // console.log('you clicked mee')
    navigate(`/starships/`);
  }

  useEffect(() => {
    if (starship) {
      const searchedShip = starship.filter(starship => starship.name.toLowerCase().includes(id.toLowerCase()));
      const searchedImage = image.filter(starship => starship.name.toLowerCase().includes(id.toLowerCase()));
      setFilteredstarships(searchedShip);
      setFilteredImage(searchedImage);
      setLoading(false);
    }
  }, [starship])

  //  console.log('filtrelenmiş hali',filteredStarships)
  //  console.log('starship details: id', id)
  // console.log('StarshipDetails: resim->', filteredImage[0])

  return (
    <>
      {loading ? (
        <div className='loading'>
          <img src={LoadingGif} alt='light-saber-loading' />
          <p>Loading...</p>
        </div>
      ) : (
        <>
      
        <div className="container">

          <div className='firstdiv'>
            <h1>{filteredStarships[0].name}</h1>
            <h3>{filteredStarships[0].model}</h3>
            <h4>{filteredStarships[0].manufacturer}</h4>
            <button onClick={() =>handleNavigate()} className='Goback blue'>Go back</button>

            <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
              <color attach="background" args={["#101010"]} />
              <PresentationControls speed={1.5} zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={'sunset'}>
                  <Model scale={0.01}/>
                </Stage>
              </PresentationControls>
            </Canvas>



          </div>
          <div className='seconddiv'>
            <img src={filteredImage[0].img} alt="CR90 corvette" />
            <div className="detailsdesign">
              <div className='cards'>
                <div>
                  <h6>Passengers-</h6>
                  <h6>{filteredStarships[0].passengers}</h6>
                </div>
              </div>
              <div className='cards'>
                <div>
                  <h6>Max Speed-</h6>
                  <h6>{filteredStarships[0].max_atmosphering_speed}</h6>
                </div>
              </div>
              <div className='cards'>
                <div>
                  <h6>Crew-</h6>
                  <h6>{filteredStarships[0].crew}</h6>
                </div>
              </div>
              <div className='cards'>
                <div>
                  <h6>Cargo Capacity-</h6>
                  <h6>{filteredStarships[0].cargo_capacity}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>

      )}
    </>
  )
}
export default StarshipDetails

