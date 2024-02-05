import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Pokemons } from "../../models/Pokemons";

const UsePokemons = () => {
  const [data, setData] = useState<Pokemons[]>();
  const [pagination, setPagination] = useState<{ currentPage: number; totalPages: number }>({ currentPage: 1, totalPages: 1 });
  const state = useSelector((state:RootState) => state.pokemon.queryName)
  const getPokemons = async (page = 1) => {
    try {
      const limit = 20;
      const offset = (page - 1) * limit;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const results = response.data.results;
      const pages = Math.ceil(response.data.count / limit);
    console.log(pages);
      // Map over the results list and make calls to the URLs
      const pokemonDataPromises = results.map(async (pokemon:Pokemons) => {
        const pokemonResponse = await axios.get(pokemon.url);
        const pokemonData = {
          id: pokemonResponse.data.id,
          name: pokemonResponse.data.name,
          sprites: {
            front_default:pokemonResponse.data.sprites.front_default
          },
          height:pokemonResponse.data.height,
          experience:pokemonResponse.data.base_experience,
          weight:pokemonResponse.data.weight
        }
        return pokemonData
      });
      
      // Wait for all calls to complete before updating status
      const pokemonData = await Promise.all(pokemonDataPromises);
      

      // Update status with Pokémon data
      setData(pokemonData);
      setPagination({ currentPage: page, totalPages: pages });
    
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
    pagination
  };
};

export default UsePokemons;
