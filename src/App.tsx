import Header from "./components/Header/Header"
import '@fontsource-variable/montserrat';
import Pokemons from "./components/Pokemons/Pokemons"
import SearchPokemon from "./components/SearchPokemon/SearchPokemon"

import { usePokemons } from '@/hooks/usePokemons';

function App() {
  usePokemons();

  return (
    <>
      <Header />
      <SearchPokemon />
      
      <Pokemons />
    </>
  )
}

export default App
