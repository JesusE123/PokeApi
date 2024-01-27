import axios from "axios";
import { useState } from "react";
import { PokemonList } from "../../models/Pokemons";
import { Pokemons } from "../../models/Pokemons";

const UsePokemons = () => {
  const [data, setData] = useState<PokemonList[]>();
  
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

  return {
    result: data ? data : [],
    getPokemons,
  };
};

export default UsePokemons;
