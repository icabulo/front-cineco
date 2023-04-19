/* eslint-disable react/prop-types */

import "./film-card.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { updateCurrentFilm } from "../../context/features/selectFilm/selectFilm"

function FilmCard({
  imagen,
  title,
  estreno,
  genero,
  edadRecomendada,
  duracion,
  id: filmId,
}) {
  const dispatch = useDispatch()

  const redirect = title.trim().replaceAll(" ", "-").toLowerCase()

  const navigate = useNavigate()
  const hadleClick = () => {
    dispatch(updateCurrentFilm(filmId))
    navigate(`/bogota/peliculas/${redirect}`)
  }

  return (
    <div className="cardsContainer" onClick={hadleClick}>
      <div className="card">
        <div className="imageContainer">
          <img src={imagen} alt={title} className="film-image" />
        </div>
        <div className="infoContainer">
          <h1 className="title">{title}</h1>
          <span className="premiere">Estreno: {estreno}</span>
          <span className="gener">Género: {genero}</span>
          <div className="detailsContainer">
            <span className="details">
              Recomendada para Mayores de {edadRecomendada} años
            </span>
            <span className="details">{duracion} Min</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmCard
