import React from "react"
import "./alt-card.scss"

function AltCard({ url, activeName, name }) {
  return (
    <div className="card">
      <img src={url} alt={name} />
      {activeName && <h4 className="card__title">{name}</h4>}
    </div>
  )
}

export default AltCard
