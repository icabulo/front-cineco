import React from "react"
import { useNavigate } from "react-router-dom"

import "./landing-banner.scss"

function LandingBanner({ open, close, url }) {
  if (!open) return null
  const navigate = useNavigate()
  function stopClose(e) {
    e.stopPropagation()
  }

  return (
    <div className="banner-modal-background" onClick={close}>
      <div className="image-container" onClick={stopClose}>
        <a
          href="construccion"
          className="go-to-movie"
          onClick={() => navigate("/construccion")}
        >
          <img src={url} alt="Película destacada en la página inicial" />
        </a>
        <button type="button" className="close-button" onClick={close}>
          X
        </button>
      </div>
    </div>
  )
}

export default LandingBanner
