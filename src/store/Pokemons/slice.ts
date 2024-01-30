import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../../models/Pokemons'



const initialState: initialState = {
  data: [],
  queryName : ""
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    searchQueryName: (state, action: PayloadAction<string>) => {
      state.queryName = action.payload
      console.log(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchQueryName } = pokemonSlice.actions

export default pokemonSlice.reducer

'@/modules/tpv/store';