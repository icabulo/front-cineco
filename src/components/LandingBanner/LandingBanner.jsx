import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { closeModal } from "../../context/features/modal/modalSlice"

import "./landing-banner.scss"

function LandingBanner({ url }) {
  // if (!open) return null
  const dispatch = useDispatch()

  const navigate = useNavigate()

  function stopClose(e) {
    e.stopPropagation()
  }

  return (
    <div
      className="banner-modal-background"
      onClick={() => dispatch(closeModal("landingModal"))}
    >
      <div className="image-container" onClick={stopClose}>
        <a
          href="construccion"
          className="go-to-movie"
          onClick={() => navigate("/construccion")}
        >
          <img src={url} alt="Película destacada en la página inicial" />
        </a>
        <button
          type="button"
          className="close-button"
          onClick={() => dispatch(closeModal("landingModal"))}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default LandingBanner
