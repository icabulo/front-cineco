import React from "react"

import { CinemaDashboard } from "../components/Dasboards/CinemaDashboard"
import { DeleteCinema } from "../components/Forms/DeleteCinema"

function TestCineco() {
  return (
    <div className="div-wrapper">
      <CinemaDashboard />
      <DeleteCinema />
    </div>
  )
}

export default TestCineco
