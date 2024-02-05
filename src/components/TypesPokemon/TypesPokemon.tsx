import {  colorsForType } from "@/constants/colorsForType";



interface TypesPokemonProps {
  name:string
  url?:string
  
}

const TypesPokemon = ({name}:TypesPokemonProps) => {

 
  
  return (
   <>
   <ul className="flex flex-wrap items-center justify-center text-gray-900">
    <li style={{background:colorsForType[name]}} className="p-2 mx-2 rounded-full w-20 flex justify-center">
        <a href="#" className="hover:underline  text-white font-bold">{name}</a>
    </li>
    
</ul>
   </>
  )
}

export default TypesPokemon