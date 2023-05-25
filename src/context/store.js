import { configureStore } from "@reduxjs/toolkit"
import modalReducer from "./features/modal/modalSlice"
import selectFilmReducer from "./features/selectFilm/selectFilm"
import cinemaReducer from "./features/cinema/cinemaSlice"
import movieReducer from "./features/moviesfetch/movieSlice"

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    selectFilm: selectFilmReducer,
    cinema: cinemaReducer,
    movie: movieReducer,
  },
})
