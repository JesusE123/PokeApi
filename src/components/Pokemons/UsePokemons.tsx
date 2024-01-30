import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Pokemons } from "../../models/Pokemons";

const UsePokemons = () => {
  const [data, setData] = useState<Pokemons[]>();
  const state = useSelector((state:RootState) => state.pokemon.queryName)
  const getPokemons = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
      const results = response.data.results;

      // Map over the results list and make calls to the URLs
      const pokemonDataPromises = results.map(async (pokemon:Pokemons) => {
        const pokemonResponse = await axios.get(pokemon.url);
        const pokemonData = {
          id: pokemonResponse.data.id,
          name: pokemonResponse.data.name,
          sprites: {
            front_default:pokemonResponse.data.sprites.front_default
          },


        }
        return pokemonData
      });
      
      // Wait for all calls to complete before updating status
      const pokemonData = await Promise.all(pokemonDataPromises);
      

      // Update status with Pokémon data
      setData(pokemonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const filteredPokemons = data?.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(state.toLowerCase())
  )

  return {
    result: filteredPokemons ? filteredPokemons : [],
    getPokemons,
  };
};

export default UsePokemons;
