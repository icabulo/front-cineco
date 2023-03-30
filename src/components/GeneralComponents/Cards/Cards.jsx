/* eslint-disable react/prop-types */

import "./cards.style.scss"

function CardPremiereFilm({
  imagen,
  title,
  estreno,
  genero,
  edadRecomendada,
  duracion,
}) {
  return (
    <div className="cardsContainer">
      <div className="card">
        <div className="imageContainer">
          <img src={imagen} alt={title} />
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

export default CardPremiereFilm
