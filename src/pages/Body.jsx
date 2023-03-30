import FilmPremiere from "../components/Body/EnCartelera/FilmPremiere"
import { ComingSoon } from "../components/Body/Pronto"
import Slider from "../components/Slider/Slider"

function Body() {
  return (
    <>
      <div className="slider">
        <Slider />
      </div>
      <div className="enCartelera">
        <h1>EN CARTELERA</h1>
        <FilmPremiere />
      </div>
      <div className="pronto">
        <h1>PRONTO</h1>
        <ComingSoon />
      </div>
    </>
  )
}

export default Body
