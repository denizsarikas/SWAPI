import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useStarship } from '../context/StarshipContext'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import image from '../data/Image.json'




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


  useEffect(() => {
    if (starship) {
      const searchedShip = starship.filter(starship => starship.name.toLowerCase().includes(id.toLowerCase()));
      const searchedImage = image.filter(starship => starship.name.toLowerCase().includes(id.toLowerCase()));
      setFilteredstarships(searchedShip);
      setFilteredImage(searchedImage);
      setLoading(false);
    }
  }, [starship, id])

  //  console.log('filtrelenmiş hali',filteredStarships)
  //  console.log('starship details: id', id)
  // console.log('StarshipDetails: resim->', filteredImage[0])
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">

          <div className='firstdiv'>
            <h1>{filteredStarships[0].name}</h1>
            <h3>{filteredStarships[0].model}</h3>
            <h4>{filteredStarships[0].manufacturer}</h4>
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
              <color attach="background" args={["#101010"]} />
              <PresentationControls speed={1.5} zoom={.5} polar={[-0.1, Math.PI / 4]}>
                <Stage environment={'sunset'}>
                  <Model scale={0.01} />
                </Stage>
              </PresentationControls>
            </Canvas>
          </div>
          <div className='seconddiv'>
            <img src={filteredImage[0].img} alt="CR90 corvette" />
            <div className="detailsdesign">
              <div className='cards'>
                <div>
                  <h7>Passengers-</h7>
                  <h7>{filteredStarships[0].passengers}</h7>
                </div>
              </div>
              <div className='cards'>
                <div>
                  <h7>Max Speed-</h7>
                  <h7>{filteredStarships[0].max_atmosphering_speed}</h7>
                </div>
              </div>
              <div className='cards'>
                <div>
                  <h7>Crew-</h7>
                  <h7>{filteredStarships[0].crew}</h7>
                </div>
              </div>
              <div className='cards'>
                <div>
                  <h7>Cargo Capacity-</h7>
                  <h7>{filteredStarships[0].cargo_capacity}</h7>
                </div>
              </div>
            </div>
          </div>
        </div>

      )}
    </>
  )
}
export default StarshipDetails

