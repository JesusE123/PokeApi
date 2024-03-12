import { PokemonResponse } from '@/models/Pokemons';

export type initialState = {
  
  queryName: string,
  showModal: boolean,
  limit: number,
  offset: number,
  loading: boolean,
  pages: number,
  currentPage: number,
  data: Array<PokemonResponse>
};
