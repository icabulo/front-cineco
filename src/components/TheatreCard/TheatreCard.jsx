import "./theatre-card.scss"
import { useNavigate } from "react-router-dom"

const navigate = useNavigate()

function TheatreCard() {
  return (
    <section className="theatre">
      <h2>Americas</h2>
      <h3>2D Doblado Estandar</h3>
      <a href="construccion" onClick={() => navigate("/construccion")}>
        3:20 PM
      </a>
    </section>
  )
}
export default TheatreCard
