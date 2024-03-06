import { PokemonResponse } from '@/models/Pokemons';

export type initialState = {
  selectType: string,
  queryName: string,
  showModal: boolean,
  limit: number,
  offset: number,
  loading: boolean,
  pages: number,
  currentPage: number,
  data: Array<PokemonResponse>
};
