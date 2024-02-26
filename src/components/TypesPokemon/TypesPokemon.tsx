import {  colorsForType } from "@/constants/colorsForType";



interface TypesPokemonProps {
  name:string
  url?:string
  handleType(name: string): void;
  
}

const TypesPokemon = ({name, handleType}:TypesPokemonProps) => {

 
  
  return (
    <>
    <ul className="flex flex-wrap justify-center lg:justify-start lg:space-y-2 text-gray-900">
      <li 
        style={{background: colorsForType[name]}} 
        className="p-2 mx-1 lg:mx-2 lg:my-1 rounded-full lg:rounded-full lg:w-20 flex justify-center items-center"
        onClick={() => handleType(name)}
      >
        <a href="#" className="hover:underline text-white font-bold">{name}</a>
      </li>
    </ul>
  </>
  )
}

export default TypesPokemon