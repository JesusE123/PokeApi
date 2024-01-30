export type Pokemons = {
    name:string,
    url:string,
    sprites: {
        front_default:string
    }
}

 export type PokemonList = {
    result:Pokemons[]
}

export type initialState = {
    data : []
    queryName: string
}
