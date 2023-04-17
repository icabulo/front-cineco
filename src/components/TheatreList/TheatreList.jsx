import "./theatre-list.scss"
import { TheatreCard } from "../TheatreCard"
import theatresAgenda from "../../mockData/Theatre/mockData"

function TheatreList() {
  // theatresAgenda is hardcoded-mocked-data imported
  const showTheaters = theatresAgenda.map((theater) => (
    <TheatreCard
      theaterName={theater.name}
      key={theater.idTheater}
      id={theater.idTheater}
    />
  ))
  return <div className="theatre-list">{showTheaters}</div>
}
export default TheatreList
