import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './type'



const initialState: initialState = {
  currentPage : 0,
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

    getCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
      console.log(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchQueryName,getCurrentPage } = pokemonSlice.actions

export default pokemonSlice.reducer
