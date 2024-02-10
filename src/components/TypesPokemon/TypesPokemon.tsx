import {  colorsForType } from "@/constants/colorsForType";



interface TypesPokemonProps {
  name:string
  url?:string
  handleType(name: string): void;
  
}

const TypesPokemon = ({name, handleType}:TypesPokemonProps) => {

 
  
  return (
   <>
   <ul className="flex flex-wrap items-center justify-center text-gray-900">
    <li 
    style={{background:colorsForType[name]}} 
    className="p-2 mx-2 rounded-full w-20 flex justify-center"
    onClick={ () => handleType(name)}
    >
        <a href="#" className="hover:underline  text-white font-bold">{name}</a>
    </li>
    
</ul>
   </>
  )
}

export default TypesPokemon