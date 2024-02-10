import { Pokemons } from "../../models/Pokemons"

export type initialState = {
    pokemon?: Array<Pokemons>
    selectType:string
    queryName:string
}