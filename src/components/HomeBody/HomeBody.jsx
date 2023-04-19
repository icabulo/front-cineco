// import FilmPremiere from "../components/Body/EnCartelera/FilmPremiere"
import { FilmPremiere } from "./FilmPremiere"
import "./home-body.scss"
// import { ComingSoon } from "../components/Body/Pronto"
// import Slider from "../components/Slider/Slider"

function HomeBody() {
  return (
    <div className="home-body">
      {/* <div className="slider">
        <Slider />
      </div> */}
      <div className="home-body__enCartelera">
        <h1>EN CARTELERA</h1>
        <FilmPremiere />
      </div>
      {/*  <div className="pronto">
        <h1>PRONTO</h1>
        <ComingSoon />
      </div> */}
    </div>
  )
}

export default HomeBody
