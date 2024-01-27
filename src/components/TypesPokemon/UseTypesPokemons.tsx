import { useState } from "react";
import axios from "axios";

const UseTypesPokemons =  () => {
    const [data, setData] = useState()
    const FetchTypesPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/type')
        .then((res) => setData(res.data.results))
        .catch((err) => console.log(err))
    }

    

  return {
    result: data ? data : [],
    FetchTypesPokemon
  }
   
  
}

export default UseTypesPokemons