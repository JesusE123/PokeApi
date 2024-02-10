import { FormEvent} from 'react';
import { useDispatch } from 'react-redux'

import { searchQueryName } from '../../store/Pokemons';
const useSearchPokemon = () => {
  
  const dispatch = useDispatch()

 const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = (e.target as HTMLInputElement).value
  setTimeout(() => {
    dispatch(searchQueryName(value))
  }, 1000);
  
 }

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}


  
    
  return {
    handlechange,handleSubmit
  }
}

export default useSearchPokemon