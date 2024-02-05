export type Pokemons = {
    name:string,
    url:string,
    sprites: {
        front_default:string
    }
    height:number,
    weight:number,
    experience:number
    img:string
   
}

 export type PokemonList = {
    result:Pokemons[]
}

