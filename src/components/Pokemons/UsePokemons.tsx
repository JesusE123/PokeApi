import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import {  PokemonResponse } from "../../models/Pokemons";

const UsePokemons = () => {
  const [data, setData] = useState<PokemonResponse[]>();
  const [globalPokemons, setGlobalPokemons] = useState<PokemonResponse[]>([]);
  const [pagination, setPagination] = useState<{
    currentPage: number;
    totalPages: number;
  }>({ currentPage: 1, totalPages: 1 });
  const [isLoading, setIsLoading] = useState<boolean>(true);
 

  const state = useSelector((state: RootState) => state.pokemon);
  const getPokemons = async (page = 1) => {
    try {
      const limit = 20;
      const offset = (page - 1) * limit;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = response.data.results;
      const pages = Math.ceil(response.data.count / limit);
      const promises = data.map(async (pokemon:PokemonResponse) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
      })

      const results =  await Promise.all(promises)
      setData(results)
      setPagination({ currentPage: page, totalPages: pages });
      setIsLoading(false);
  }
  catch {
    console.log("Error")
  }
}

  
  
const getGlobalPokemons = async () => {
  try {
    
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`
    );
    const data = response.data.results;
    
    const promises = data.map(async (pokemon:PokemonResponse) => {
      const res = await fetch(pokemon.url)
      const data = await res.json()
      return data
    })

    const results =  await Promise.all(promises)
    setGlobalPokemons(results)
    
    setIsLoading(false);
}
catch {
  console.log("Error")
}
}  

const filterPokemons = globalPokemons.filter((pokemon) => (
  pokemon.name.toLowerCase().includes(state.queryName.toLocaleLowerCase()) 
 
))
  

  return {
    result: data ? data : [],
    getPokemons,
    isLoading,
    pagination,
    getGlobalPokemons,
    filterPokemons
    
  };
};

export default UsePokemons;
