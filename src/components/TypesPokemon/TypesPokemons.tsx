import { useEffect } from "react";
import UseTypesPokemons from "./UseTypesPokemons";
import { typesPokemonData } from "@/models/TypesofPokemons";
import TypesPokemon from "./TypesPokemon";

const TypesPokemons = () => {
  const { result, FetchTypesPokemon, handleType } = UseTypesPokemons();


  useEffect(() => {
    FetchTypesPokemon();
  }, []);
  return (
    <div className="flex flex-row justify-center space-x-1 mt-6">
      {result.map((element: typesPokemonData, index: number) => {
        return (
          <TypesPokemon key={index} name={element.name} url={element.url} handleType={handleType} />
        );
      })}
    </div>
  );
};

export default TypesPokemons;
