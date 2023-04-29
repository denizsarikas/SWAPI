import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StarshipContext = createContext()

export const StarshipProvider = ({ children }) => {

    const [starship, setStarship] = useState()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('https://swapi.dev/api/starships');
    //             console.log('1 numaralı log: gelen veri->', response.data.results)
    //             setStarship(response.data.results)
    //             console.log('2 numaralı log: atanan veri->', starship)            
    //         } catch (error) {
    //             console.log(error.message);
    //         }
    //     };
    //     fetchData();
    // }, []);

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships')
          .then(response => {
            // console.log('gelen veri->', response.data.results);
            setStarship(response.data.results);
          })
          .catch(error => {
            console.log(error.message);
          });
      }, []);

      
    const values = { starship, setStarship }

    return <StarshipContext.Provider value={values}>{children}</StarshipContext.Provider>
}

export const useStarship = () => useContext(StarshipContext)