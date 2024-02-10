import { useEffect } from "react";
import Pokemon from "./Pokemon";
import UsePokemons from "./UsePokemons";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";

const Pokemons = () => {
const { result, getPokemons, isLoading, pagination } = UsePokemons();
   

  useEffect(() => {
    getPokemons();
  }, []);

  const handlePageChange = async (page: number) => {
    // Llama a la función getPokemons con el número de página deseado
    await getPokemons(page);
  }    

  if(isLoading) return <Loading />
  
  if (result.length === 0) return <p className="text-white text-center font-semibold mt-3">No hemos encontrado a tu pokemon en esta pagina, quizas este en otra...</p>
  return (
    <>
    
      <div className="grid grid-cols-5">
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
      
    <Pagination handlePageChange={handlePageChange} pagination={pagination}/>
     
    </>
  );
};

export default Pokemons;
