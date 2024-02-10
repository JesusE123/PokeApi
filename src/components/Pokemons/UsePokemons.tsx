import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Pokemon, PokemonResponse } from "../../models/Pokemons";

const UsePokemons = () => {
  const [data, setData] = useState<Pokemon[]>();
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
      const results = response.data.results;
      const pages = Math.ceil(response.data.count / limit);

      // Map over the results list and make calls to the URLs
      const pokemonDataPromises = results.map(async (pokemon: Pokemon) => {
        const pokemonResponse = await axios.get<PokemonResponse>(pokemon.url);
        const pokemonData = {
          id: pokemonResponse.data.id,
          name: pokemonResponse.data.name,
          sprites: {
            front_default: pokemonResponse.data.sprites.front_default,
          },
          height: pokemonResponse.data.height,
          experience: pokemonResponse.data.base_experience,
          weight: pokemonResponse.data.weight,
          types: pokemonResponse.data.types.map((type) => type.type.name),
        };

        return pokemonData;
      });

      // Wait for all calls to complete before updating status
      const pokemonData = await Promise.all(pokemonDataPromises);

      // Update status with Pokémon data
      setData(pokemonData);
      setPagination({ currentPage: page, totalPages: pages });
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredPokemons = data?.filter(
    (pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(state.queryName.toLowerCase()) &&
      (!state.selectType || pokemon.types.includes(state.selectType))
  );

  return {
    result: filteredPokemons ? filteredPokemons : [],
    getPokemons,
    isLoading,
    pagination,
  };
};

export default UsePokemons;
