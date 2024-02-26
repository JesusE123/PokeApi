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
  globalPokemons ,
  filteredPokemons
} = UsePokemons();


  console.log(filteredPokemons)


  useEffect(() => {
    getPokemons();
    getGlobalPokemons()
  }, []);

  

  const handlePageChange = async (page: number) => {
    
    await getPokemons(page);
  }    

  if(isLoading) return <Loading />
  
  if (result.length === 0) return <p className="text-white text-center font-semibold mt-3">No hemos encontrado a tu pokemon</p>
  return (
    <>
    {isLoading ? (
      <Loading />
    ) : (
      <div className='grid grid-cols-5 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
        {filteredPokemons.length < 1000 ? (
          <>
            {filteredPokemons.map(pokemon => (
              <Pokemon
              name={pokemon.name}
          
              img={pokemon.sprites.front_default}
              height={pokemon.height}
              weight={pokemon.weight}
              experience={pokemon.experience}
              abilities={pokemon.abilities}
            />
            ))}
          </>
        ) : (
          <>
            {result.map(pokemon => (
              <Pokemon
              name={pokemon.name}
            
              img={pokemon.sprites.front_default}
              height={pokemon.height}
              weight={pokemon.weight}
              experience={pokemon.experience}
              abilities={pokemon.abilities}
            />
            ))}
          </>
        )}
      </div>
      
    )}
    <Pagination handlePageChange={handlePageChange} pagination={pagination}/>
   

  </>
  );
};

export default Pokemons;
