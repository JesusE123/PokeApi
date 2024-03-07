export type PokemonRequest = {
  limit: number;
  offset: number;
  query?: string;
  signal?: AbortSignal;
  type?:string
}


export type PokemonDetailRequest = {
  url: string;
  signal?: AbortSignal;
}