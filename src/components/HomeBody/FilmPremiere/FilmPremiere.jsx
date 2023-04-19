/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
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
