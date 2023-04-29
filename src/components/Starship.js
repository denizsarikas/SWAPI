import { useState, useEffect } from 'react'
import Card from './Card'
import { useStarship } from '../context/StarshipContext'
import LoadingGif from '../assets/img/StarWarsLightSaber.gif'
import axios from 'axios'


const Starship = () => {

  const [deger, setDeger] = useState('')
  const { starship, setStarship } = useStarship()
  const [filteredStarships, setFilteredstarships] = useState(starship)
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [count, setCount] = useState(3)
  const [page, setPage] = useState(1);


  useEffect(() => {
    if (starship) {
      setFilteredstarships(starship.slice(0, count))
      setLoading(false);
    }
  }, [starship, count])


  const handleClick = () => {
    const searchedShip = starship.filter(starship => starship.model.toLowerCase().includes(deger.toLowerCase()) || starship.name.toLowerCase().includes(deger.toLowerCase()));
    setFilteredstarships(searchedShip)
    setDeger('')
  };



  const handleLoadMore = async () => {

    try {
      setLoadingButton(true)
      const nextPageUrl = `https://swapi.dev/api/starships/?page=${page + 1}`;
      const response = await axios.get(nextPageUrl);
      const newStarships = response.data.results;
      setStarship([...starship, ...newStarships]);
      setPage(page + 1);
    } catch (error) {
      console.error(error);
    }
    const newCount = count + 3;
    setCount(newCount);
    setFilteredstarships(starship.slice(0, newCount));
    setLoadingButton(false)
  };

  return (
    <>
      <div className='Filter'>
        <div className='subfilter'>
          <label>Name /Model
            <input
              type='text'
              placeholder='Enter a name or model'
              value={deger}
              onChange={(e) => setDeger(e.target.value)}
            />
            <button
              onClick={handleClick}
            >
              Filter
            </button>
          </label>
        </div>
      </div>

      <div className='Starships'>
        {loading ? (
          <div>
            <img src={LoadingGif} alt='light-saber-loading' />
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {filteredStarships?.length > 0 ? (
              <Card filteredStarships={filteredStarships} />
            ) : (
              <h2>No results found</h2>
            )}
            {count < starship?.length && (
              <button
                className="button1"
                onClick={handleLoadMore}
                disabled={loadingButton} // yeni satır
              >
                <span>{loadingButton ? "LOADING..." : "LOAD MORE"}</span>
              </button>
            )}
          </>
        )}
      </div>
    </>
  )
}
export default Starship