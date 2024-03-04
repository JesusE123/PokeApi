import { useEffect } from "react";
import Pokemon from "./Pokemon";
import UsePokemons from "./UsePokemons";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";

const Pokemons = () => {
  const {
    result,
    getPokemons,
    isLoading,
    pagination,
    getGlobalPokemons,
    filterPokemons,
  } = UsePokemons();

  useEffect(() => {
    getPokemons();
    getGlobalPokemons();
  }, []);

  const handlePageChange = async (page: number) => {
    await getPokemons(page);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-5 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {filterPokemons.length == 500 ? (
            <>
              {result.map((pokemon ,index) => (
                <Pokemon
                  name={pokemon.name}
                  key={index}
                  img={pokemon.sprites.other.dream_world.front_default}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  experience={pokemon.base_experience}
                  abilities={pokemon.abilities}
                />
                ))}
            </>
          ) : (
            <>
             {filterPokemons.map((pokemon ,index) => (
                <Pokemon
                  name={pokemon.name}
                  key={index}
                  img={pokemon.sprites.other.dream_world.front_default}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  experience={pokemon.base_experience}
                  abilities={pokemon.abilities}
                />
              ))}
            </>
          )}
        </div>
      )}
      <Pagination handlePageChange={handlePageChange} pagination={pagination} />
    </>
  );
};

export default Pokemons;
