import "./theatre-card.scss"
import { nanoid } from "@reduxjs/toolkit"
import { Room } from "./Room"
import theatresAgenda from "../../mockData/Theatre/mockData"

function TheatreCard({ theaterName, id }) {
  const currentTheater = theatresAgenda.find(
    (theater) => theater.idTheater === id
  )

  // current theatre has rooms.
  // rooms is an array of objects
  // the object has a string for the format name,
  // and an array for the list of schedule to present the film in that room.
  const showRooms = currentTheater.rooms.map((room) => (
    <Room roomTitle={room.format} key={nanoid()} agenda={room.agenda} />
  ))
  return (
    <section className="theatre">
      <h2 className="theatre__title">{theaterName}</h2>
      <div className="theatre__rooms">{showRooms}</div>
    </section>
  )
}
export default TheatreCard
