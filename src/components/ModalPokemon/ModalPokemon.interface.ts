import { Dispatch, SetStateAction } from 'react';
import { PokemonAbility } from '@/models/Pokemons';

export interface modalPokemonProps {
    name:string,
   
    value:boolean
  
    abilities:PokemonAbility[]
    img:string
    toggle: Dispatch<SetStateAction<boolean>>;
}

