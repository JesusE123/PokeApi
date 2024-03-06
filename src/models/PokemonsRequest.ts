export type PokemonRequest = {
  limit: number;
  offset: number;
  query?: string;
  signal?: AbortSignal;
}


export type PokemonDetailRequest = {
  url: string;
  signal?: AbortSignal;
}