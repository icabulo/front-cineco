import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { TheatreList } from "../components/TheatreList"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { FilmCard } from "../components/FilmCard"
import "./styles/selected-film.scss"

function SelectedFilm() {
  const { currentFilm } = useSelector((store) => store.selectFilm)
  const { moviesList } = useSelector((store) => store.movie)

  //   console.log(typeof currentFilm)
  const [currentMovie, setCurrentMovie] = useState(false)

  useEffect(() => {
    if (moviesList) {
      const myMovie = moviesList.find((movie) => movie.idmovie === currentFilm)
      setCurrentMovie(myMovie)
    }
  }, [moviesList])

  return (
    <div>
      <Header />
      <div className="film-body">
        {currentMovie && (
          <FilmCard
            duracion={currentMovie.duracion}
            edadRecomendada={currentMovie.edadRecomendada}
            estreno={currentMovie.estreno}
            genero={currentMovie.genero}
            imagen={currentMovie.imagen}
            title={currentMovie.title}
            id={currentMovie.idmovie}
            key={currentMovie.idmovie}
          />
        )}
        <TheatreList />
      </div>
      <Footer />
    </div>
  )
}
export default SelectedFilm

/* import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { TheatreList } from "../components/TheatreList"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { FilmCard } from "../components/FilmCard"
import { getAllMovies } from "../mockData/Films/movies"
import "./styles/selected-film.scss"

function SelectedFilm() {
  const { currentFilm } = useSelector((store) => store.selectFilm)
  //   console.log(typeof currentFilm)
  const [movieArray, setMovieArray] = useState(null)
  const [currentMovie, setCurrentMovie] = useState(false)

  useEffect(() => {
    getAllMovies().then((data) => setMovieArray(data))
  }, [])

  useEffect(() => {
    if (movieArray) {
      const myMovie = movieArray.find((movie) => movie.id === currentFilm)
      setCurrentMovie(myMovie)
    }
  }, [movieArray])

  return (
    <div>
      <Header />
      <div className="film-body">
        {currentMovie && (
          <FilmCard
            duracion={currentMovie.duracion}
            edadRecomendada={currentMovie.edadRecomendada}
            estreno={currentMovie.estreno}
            genero={currentMovie.genero}
            imagen={currentMovie.imagen}
            title={currentMovie.title}
            id={currentMovie.id}
            key={currentMovie.id}
          />
        )}
        <TheatreList />
      </div>
      <Footer />
    </div>
  )
}
export default SelectedFilm
 */
