import { useState, useEffect } from 'react'
import Card from './Card'
import { useStarship } from '../context/StarshipContext'
import LoadingGif from '../assets/img/StarWarsLightSaber.gif'
import axios from 'axios'


const Starship = () => {

  const [deger, setDeger] = useState('')
  const { starship, setStarship } = useStarship()
  const [filteredStarships, setFilteredstarships] = useState()
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);
  const [count, setCount] = useState(6)
  const [page, setPage] = useState(2);

  useEffect(() => {
    if (starship) {
      setStarship(starship.slice(0, 10))
    }
  }, [])

  useEffect(() => {

    if (starship) {
      setFilteredstarships(starship.slice(0, count))
      setLoading(false);
    }
  }, [starship, count])

  const handleClick = () => {
    const searchedShip = starship.filter(starship => starship.model.toLowerCase().includes(deger.toLowerCase()) || starship.name.toLowerCase().includes(deger.toLowerCase()));
    setFilteredstarships(searchedShip.slice(0, count))
    setDeger('')
  };


  const handleLoadMore = async () => {
    setLoadingButton(true);
    let newData = [];
    if (page < 5) {
      const response = await axios.get(`https://swapi.dev/api/starships/?page=${page}`);
      newData = response.data.results;
      setPage(page + 1);
      setStarship([...starship, ...newData]);
    }
    setCount(count + 6);
    setLoadingButton(false);
  };

  return (
    <>
      <div className='Filter'>
        <div className='subfilter'>
          <label className="name-model">
            Name / Model
            <input
              className="input-field"
              type="text"
              placeholder="Enter a name or model"
              value={deger}
              onChange={(e) => setDeger(e.target.value)}
            />
            <button
              className="filter-button"
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
              <h2 className='bulunamadi'>No result. </h2>
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