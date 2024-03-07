import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './type';
import { PokemonResponse } from '@/models/Pokemons';

const initialState: initialState = {
  selectType : "",
  queryName : "",
  showModal : false,
  limit: 20,
  offset: 0,
  pages: 0,
  currentPage: 1,
  data: [],
  loading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setPages: (state, action: PayloadAction<number>) => {
      state.pages = Math.ceil(action.payload / state.limit);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      state.offset = action.payload > 0 ? (action.payload - 1) * state.limit : 0;
    },
    setPagination: (state, action: PayloadAction<{ limit: number, offset: number }>) => {
      state.limit = action.payload.limit;
      state.offset = action.payload.offset;
    },
    setData: (state, action: PayloadAction<Array<PokemonResponse>>) => {
      state.data = action.payload;
    },
    searchQueryName: (state, action: PayloadAction<string>) => {
      state.queryName = action.payload
    },
     selectedType: (state, action: PayloadAction<string>) => {
      state.selectType = action.payload;
    
    },    
  },
})

// Action creators are generated for each case reducer function
export const { searchQueryName, selectedType, setData, setLoading, setPagination, setPages, setCurrentPage } = pokemonSlice.actions

export default pokemonSlice.reducer
