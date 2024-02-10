import { useState } from "react";
import axios from "axios";
import { typesPokemonResponse } from "@/models/TypesofPokemons";
import { selectedType } from "@/store/Pokemons";
import { useDispatch } from "react-redux";



const UseTypesPokemons =  () => {
    const [data, setData] = useState<typesPokemonResponse>()
    const dispatch = useDispatch()
    const FetchTypesPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/type')
        .then((res) => setData(res.data.results))
        .catch((err) => console.log(err))
    }

    const handleType = (name:string) => {
      dispatch(selectedType(name))
    }
  return {
    result: data ? data : [],
    FetchTypesPokemon,
    handleType
  }
   
  
}

export default UseTypesPokemons