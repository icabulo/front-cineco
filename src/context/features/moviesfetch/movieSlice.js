/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchMovies } from "./services/moviesAPI"

const initialState = {
  moviesList: [],
  isLoading: true,
}

export const getMoviesAsync = createAsyncThunk("movies/getMovies", async () => {
  const data = await fetchMovies("mocked-token")
  return data
})

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        const result = action.payload
        state.isLoading = false
        state.moviesList = result
      })
  },
})
export const { toggleLoading } = movieSlice.actions

export default movieSlice.reducer
