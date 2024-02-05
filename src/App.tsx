import Header from "./components/Header/Header"


import Pokemons from "./components/Pokemons/Pokemons"
import SearchPokemon from "./components/SearchPokemon/SearchPokemon"
import TypesPokemons from "./components/TypesPokemon/TypesPokemons"
import Container from "./components/container/Container"



function App() {


  return (
    <>
      <Container>
      <Header />
      <SearchPokemon />
      <TypesPokemons />
      <Pokemons />
      </Container>
     
    </>
  )
}

export default App
