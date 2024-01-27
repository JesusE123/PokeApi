import Header from "./components/Header/Header"
import Pokemons from "./components/Pokemons/Pokemons"
import SearchPokemon from "./components/SearchPokemon/SearchPokemon"
import TypesPokemons from "./components/TypesPokemon/TypesPokemons"



function App() {


  return (
    <>
      <Header />
      <div className="mx-auto container">
      <SearchPokemon />
      <TypesPokemons />
      <Pokemons />
      </div>
     
    </>
  )
}

export default App
