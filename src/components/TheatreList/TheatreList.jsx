import "./theatre-list.scss"
import { useSelector } from "react-redux"
import { TheatreCard } from "../TheatreCard"
import theatresForFilm from "../../mockData/Theatre/mockData"

function TheatreList() {
  const { currentFilm } = useSelector((store) => store.selectFilm)
  const getTheatreObj = theatresForFilm.find(
    (item) => item.filmId === currentFilm
  )
  const currentList = getTheatreObj.theatres

  const showTheatres = currentList.map((theater) => (
    <TheatreCard
      theatreName={theater.name}
      key={theater.idTheatre}
      id={theater.idTheatre}
    />
  ))
  return <div className="theatre-list">{showTheatres}</div>
}
export default TheatreList
