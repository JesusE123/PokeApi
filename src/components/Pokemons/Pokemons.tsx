import { useEffect } from "react";
import Pokemon from "./Pokemon";
import UsePokemons from "./UsePokemons";
import Pagination from "../Pagination/Pagination";

const Pokemons = () => {
  const { result, getPokemons, pagination } = UsePokemons();

  useEffect(() => {
    getPokemons();
  }, []);

  const handlePageChange = async (page: number) => {
    // Llama a la función getPokemons con el número de página deseado
    await getPokemons(page);
    
  };
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-4 gap-2">
        {result.map((pokemon, index) => {
          return (
            <Pokemon
              name={pokemon.name}
              key={index}
              img={pokemon.sprites.front_default}
              height={pokemon.height}
              weight={pokemon.weight}
              experience={pokemon.experience}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <Pagination handlePageChange={handlePageChange} pagination={pagination}/>
      </div>
    </>
  );
};

export default Pokemons;
