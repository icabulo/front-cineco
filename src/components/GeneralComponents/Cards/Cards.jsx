function CardPremiereFilm(
  imagen,
  title,
  estreno,
  genero,
  edadRecomendada,
  duracion
) {
  return (
    <div className="cardsContainer">
      <div className="card">
        <div className="imageContainer">
          <img src={imagen} alt={title} />
        </div>
        <div className="infoContainer">
          <h1>{title}</h1>
          <span>Estreno: {estreno}</span>
          <span>Género: {genero}</span>
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
