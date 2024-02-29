import { Dispatch, SetStateAction } from 'react';

export interface modalPokemonProps {
    name:string,
   
    isOpen:boolean
  
   
    img:string
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
