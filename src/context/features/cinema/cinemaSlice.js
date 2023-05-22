/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchCinemas } from "./services/cinemaAPI"

const initialState = {
  cinemaList: [],
  isLoading: true,
}

export const getCinemasAsync = createAsyncThunk(
  "cinema/getAllCinemas",
  async () => {
    const data = await fetchCinemas("mocked-token")
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
  },
})
export const { toggleLoading } = cinemaSlice.actions

export default cinemaSlice.reducer
