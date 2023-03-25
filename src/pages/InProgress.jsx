import React from "react"
import { useNavigate } from "react-router-dom"
import cinecoLogo from "../icons/logo_cineco.svg"

function InProgress() {
  const navigate = useNavigate()
  const imgStyle = {
    backgroundColor: "black",
  }
  return (
    <div>
      <img
        src={cinecoLogo}
        alt="logo cinecolombia pagina en construccion"
        style={imgStyle}
      />
      <h1>PAGINA EN CONSTRUCCION</h1>
      <button type="button" onClick={() => navigate("/home")}>
        home
      </button>
    </div>
  )
}

export default InProgress
