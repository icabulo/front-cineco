/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentFilm: -1,
}

const selectFilmSlice = createSlice({
  name: "selectFilm",
  initialState,
  reducers: {
    updateCurrentFilm: (state, action) => {
      state.currentFilm = action.payload
    },
  },
})

export const { updateCurrentFilm } = selectFilmSlice.actions
export default selectFilmSlice.reducer
