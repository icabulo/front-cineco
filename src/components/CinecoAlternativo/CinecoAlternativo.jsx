import React from "react"
import "./cineco-alternativo.scss"

import { useNavigate } from "react-router-dom"
import { AltSection } from "./AltSection"

import {
  otherImageList,
  OperaImageList,
  balletImageList,
  teatroImageList,
} from "./MockData/mockData"

function CinecoAlternativo() {
  const navigate = useNavigate()

  return (
    <section className="cineco-alternativo">
      <div className="cineco-alternativo__section-container">
        <h2 className="cineco-alternativo__title">CINECO ALTERNATIVO</h2>
        <div className="cineco-alternativo__opera-grid">
          <AltSection
            title="Ópera"
            imagelist={OperaImageList}
            url={() => navigate("/construccion")}
          />
        </div>
        <div className="cineco-alternativo__others-grid">
          <AltSection title="Ballet" imagelist={balletImageList} />
          <AltSection title="Teatro" imagelist={teatroImageList} />
          <AltSection title="Otros" imagelist={otherImageList} />
        </div>
      </div>
    </section>
  )
}

export default CinecoAlternativo
