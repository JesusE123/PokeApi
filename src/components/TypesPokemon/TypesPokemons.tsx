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
    <div className="flex flex-col lg:flex-row justify-center lg:space-y-2 mt-6 lg:flex-wrap lg:justify-center">
  {result.map((element: typesPokemonData, index: number) => {
    return (
      <TypesPokemon key={index} name={element.name} url={element.url} handleType={handleType} />
    );
  })}
</div>
  );
};

export default TypesPokemons;
