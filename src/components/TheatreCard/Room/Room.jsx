import "./room.scss"
import { useNavigate } from "react-router-dom"
import { nanoid } from "@reduxjs/toolkit"

function Room({ roomTitle, agenda }) {
  const navigate = useNavigate()
  //   const agenda = ["3:20 PM", "4:40 PM", "7:30 PM", "9:30 PM"]
  // note: remember to set the navigate path to the theather id
  const displayAgenda = agenda.map((time) => (
    <a
      href="construccion"
      className="room__time-btn"
      onClick={() => navigate("/construccion")}
      key={nanoid()}
    >
      {time}
    </a>
  ))

  return (
    <section className="room">
      <h3 className="room__title">{roomTitle}</h3>
      <div className="room__catalog">{displayAgenda}</div>
    </section>
  )
}
export default Room
