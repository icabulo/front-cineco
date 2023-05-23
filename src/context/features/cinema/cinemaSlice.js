/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCinemas, filterFromUser } from "./services/cinemaAPI"

const initialState = {
  cinemaList: [],
  isLoading: true,
  fiteredList: [],
  isFiltering: false,
}

export const getCinemasAsync = createAsyncThunk(
  "cinema/getAllCinemas",
  async () => {
    const data = await fetchCinemas("mocked-token")
    return data
  }
)

export const filterCinemaAsync = createAsyncThunk(
  "cinema/fiterOneCinema",
  async (id) => {
    const data = await filterFromUser("mocked-token", id)
    return data
  }
)

const cinemaSlice = createSlice({
  name: "cinemas",
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCinemasAsync.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCinemasAsync.fulfilled, (state, action) => {
        const result = action.payload
        state.isLoading = false
        state.cinemaList = result
      })
      .addCase(filterCinemaAsync.pending, (state) => {
        state.isFiltering = false
      })
      .addCase(filterCinemaAsync.fulfilled, (state, action) => {
        const result = action.payload
        state.isFiltering = true
        if (result.length > 0) {
          state.cinemaList = result
        }
      })
  },
})
export const { toggleLoading } = cinemaSlice.actions

export default cinemaSlice.reducer
