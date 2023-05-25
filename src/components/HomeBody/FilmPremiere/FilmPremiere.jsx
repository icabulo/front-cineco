/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { getAllMovies, movieType } from "../../../mockData/Films/movies"
import { FilmCard } from "../../FilmCard"
import { getMoviesAsync } from "../../../context/features/moviesfetch/movieSlice"

import "./filmPremiere.scss"

function FilmPremiere() {
  // const [movieArray, setMovieArray] = useState(null)
  const dispatch = useDispatch()
  const { moviesList } = useSelector((store) => store.movie)
  // console.log("Movie from redux", moviesList)

  useEffect(() => {
    // getAllMovies().then((data) => setMovieArray(data))
    dispatch(getMoviesAsync())
  }, [])
  return (
    <div className="film-premier-div">
      {moviesList.length > 0 &&
        moviesList.map((movieInfo) => (
          <FilmCard
            duracion={movieInfo.duracion}
            edadRecomendada={movieInfo.edadRecomendada}
            estreno={movieInfo.estreno}
            genero={movieInfo.genero}
            imagen={movieInfo.imagen}
            title={movieInfo.title}
            id={movieInfo.idmovie}
            key={movieInfo.idmovie}
          />
        ))}
    </div>
  )
}

export default FilmPremiere

/* import { useEffect, useState } from "react"
import { getAllMovies, movieType } from "../../../mockData/Films/movies"
import { FilmCard } from "../../FilmCard"

import "./filmPremiere.scss"

function FilmPremiere() {
  const [movieArray, setMovieArray] = useState(null)

  useEffect(() => {
    getAllMovies().then((data) => setMovieArray(data))
  }, [])
  return (
    <div className="film-premier-div">
      {movieArray &&
        movieArray
          .filter((movie) => movie.type === movieType.filmPremiere)
          .map((movieInfo) => (
            <FilmCard
              duracion={movieInfo.duracion}
              edadRecomendada={movieInfo.edadRecomendada}
              estreno={movieInfo.estreno}
              genero={movieInfo.genero}
              imagen={movieInfo.imagen}
              title={movieInfo.title}
              id={movieInfo.id}
              key={movieInfo.id}
            />
          ))}
    </div>
  )
}

export default FilmPremiere
 */
