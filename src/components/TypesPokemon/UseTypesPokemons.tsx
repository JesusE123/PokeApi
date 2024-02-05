import { useState } from "react";
import axios from "axios";
import { TypePokemonsResponse } from "./TypesPokemon.interface";

const UseTypesPokemons =  () => {
    const [data, setData] = useState<TypePokemonsResponse[]>()
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