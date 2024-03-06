import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './type'



const initialState: initialState = {
  selectType : "",
  queryName : "",
  showModal : false 
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    searchQueryName: (state, action: PayloadAction<string>) => {
      state.queryName = action.payload
     
    },

     selectedType: (state, action: PayloadAction<string>) => {
      state.selectType = action.payload;
      console.log(action.payload)
    },

    
  },
})

// Action creators are generated for each case reducer function
export const { searchQueryName,selectedType} = pokemonSlice.actions

export default pokemonSlice.reducer
