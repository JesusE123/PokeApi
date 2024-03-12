import Pokemon from "./Pokemon";
import UsePokemons from "./UsePokemons";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import { PokemonResponse } from "@/models/Pokemons";

const Pokemons = () => {
  const { result, isLoading, pagination, handlePageChange } = UsePokemons();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <>
          {result.map((pokemon:PokemonResponse, index:number) => (
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
      </div>
      <Pagination handlePageChange={handlePageChange} pagination={pagination} />
    </>
  );
};

export default Pokemons;
