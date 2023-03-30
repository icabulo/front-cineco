/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { getAllMovies, movieType } from "../../../services/movies"
import { CardPremiereFilm } from "../../GeneralComponents/Cards"

function ComingSoon() {
  const [movieArray, setMovieArray] = useState(null)

  useEffect(() => {
    getAllMovies().then((data) => setMovieArray(data))
  }, [getAllMovies])
  return (
    <div>
      {movieArray &&
        movieArray
          .filter((movie) => movie.type === movieType.comingSoon)
          .map((movieInfo) => (
            <CardPremiereFilm
              duracion={movieInfo.duracion}
              edadRecomendada={movieInfo.edadRecomendada}
              estreno={movieInfo.estreno}
              genero={movieInfo.genero}
              imagen={movieInfo.imagen}
              title={movieInfo.title}
              key={movieInfo.id}
            />
          ))}
    </div>
  )
}

export default ComingSoon
