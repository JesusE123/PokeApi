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
    console.log("s")
  }
}

  
  
  const getGlobalPokemons = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`
      );
      const results = response.data.results;
      

      // Map over the results list and make calls to the URLs
      const pokemonDataPromises = results.map(async (pokemon: PokemonResponse) => {
        const pokemonResponse = await axios.get<PokemonResponse>(pokemon.url);
        const pokemonData = {
          id: pokemonResponse.data.id,
          name: pokemonResponse.data.name,
          sprites: {
            front: pokemonResponse.data.sprites.other.dream_world.front_default,
          },
          
          height: pokemonResponse.data.height,
          experience: pokemonResponse.data.experience,
          weight: pokemonResponse.data.weight,
          types: pokemonResponse.data.types.map((type) => type.type.type.name),
          abilities: pokemonResponse.data.abilities.map((ability) => ability.ability.ability.name)
        };

        return pokemonData;
      });

      // Wait for all calls to complete before updating status
      const pokemonData = await Promise.all(pokemonDataPromises);

      // Update status with Pokémon data
      setGlobalPokemons(pokemonData.slice(0.20));
      
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 


  const filteredPokemons = globalPokemons?.filter(
    (pokemon:PokemonResponse) =>
      pokemon.name.toLowerCase().includes(state.queryName.toLowerCase()) &&
      (!state.selectType || pokemon.types.includes(state.selectType))
  );

 
  

  return {
    result: data ? data : [],
    getPokemons,
    isLoading,
    pagination,
    getGlobalPokemons,
    globalPokemons,
    filteredPokemons
  };
};

export default UsePokemons;
