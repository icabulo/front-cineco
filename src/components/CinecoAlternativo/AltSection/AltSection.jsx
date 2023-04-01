import React from "react"
import { nanoid } from "nanoid"
import { AltCard } from "../AltCard"

import "./alt-section.scss"

function AltSection({ title, imagelist, url }) {
  const displayList = imagelist.map(({ imgUrl, showName, name }) => (
    <AltCard key={nanoid()} url={imgUrl} activeName={showName} name={name} />
  ))
  return (
    <div className="subsection">
      <h3 className="subsection__title">{title}</h3>
      {imagelist && (
        <div className="subsection__image-container">{displayList}</div>
      )}
      {url && (
        <button type="button" className="subsection__btn-go-to" onClick={url}>
          Ver todo &gt;
        </button>
      )}
    </div>
  )
}

export default AltSection
