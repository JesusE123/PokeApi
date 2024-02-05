import { useEffect } from "react"
import UseTypesPokemons from "./UseTypesPokemons"
import TypesPokemon from "./TypesPokemon"
import { TypePokemonsResponse } from "./TypesPokemon.interface"

const TypesPokemons = () => {
    const {result, FetchTypesPokemon} = UseTypesPokemons()
   

    useEffect(() => {
        FetchTypesPokemon()
    },[])
  return (
    <div className="flex flex-row justify-center space-x-1 mt-6">
       {
        result.map((element:TypePokemonsResponse, index:number)=> {
          return(
            <TypesPokemon key={index} name={element.name} url={element.url}/>
          )
        })
       }
    </div>
  )
}

export default TypesPokemons