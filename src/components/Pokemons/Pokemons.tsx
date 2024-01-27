import { useEffect } from "react"
import Pokemon from "./Pokemon"
import UsePokemons from "./UsePokemons"


const Pokemons = () => {
    const {result, getPokemons} = UsePokemons()
    console.log(result)
    useEffect (() => {
      getPokemons()
    }, [])
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
        {
          result.map((pokemon, index) => {
            return(
              <Pokemon name={pokemon.name} key={index} img={pokemon.sprites.front_default}/>
            )
          })
        }
    </div>
  )
}

export default Pokemons