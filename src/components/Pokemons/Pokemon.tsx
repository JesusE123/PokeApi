import ModalPokemon from "../ModalPokemon/ModalPokemon"
import { PokemonProps } from "./Pokemon.interface"
import { useState } from "react"

const Pokemon = ({name,img,height,weight,experience,abilities}:PokemonProps) => {
const [isOpen, setIsOpen] = useState<boolean>(false)


 
  return (
    <>
    <div 
    onClick={() => setIsOpen(true)}
    className="hover:scale-110 cursor-pointer max-w-md mx-auto p-3 bg-gray-900 rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5 w-96">
  <div className="md:flex">
    <div className="md:flex-shrink-0 h-40">
      <img className="h-30 w-40 object-cover" src={img} alt="Pokemon" />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide  text-indigo-500 font-semibold">{name}</div>
      <p className="mt-2 text-gray-500">experience: {experience}</p>
      <p className="mt-2 text-gray-500"> weight: {weight}</p>
      <p className="mt-2 text-gray-500"> height: {height}</p>
    </div>
  </div>
  
   
  
</div>
  <ModalPokemon isOpen={isOpen} name={name} abilities={abilities} img={img} setIsOpen={setIsOpen}/>
    

  </>
    
  )
}

export default Pokemon