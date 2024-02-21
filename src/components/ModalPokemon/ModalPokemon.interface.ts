import { Dispatch, SetStateAction } from 'react';

export interface modalPokemonProps {
    name:string,
   
    isOpen:boolean
  
    abilities:[]
    img:string
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
