import "./theatre-card.scss"
import { nanoid } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { Room } from "./Room"
import theatresForFilm from "../../mockData/Theatre/mockData"

function TheatreCard({ theatreName, id }) {
  const { currentFilm } = useSelector((store) => store.selectFilm)
  const getTheatreObj = theatresForFilm.find(
    (item) => item.filmId === currentFilm
  )
  const currentList = getTheatreObj.theatres

  const currentTheater = currentList.find((theater) => theater.idTheatre === id)

  // current theatre has rooms.
  // rooms is an array of objects
  // the object has a string for the format name,
  // and an array for the list of schedule to present the film in that room.
  const showRooms = currentTheater.rooms.map((room) => (
    <Room roomTitle={room.format} key={nanoid()} agenda={room.agenda} />
  ))
  return (
    <section className="theatre">
      <h2 className="theatre__title">{theatreName}</h2>
      <div className="theatre__rooms">{showRooms}</div>
    </section>
  )
}
export default TheatreCard
