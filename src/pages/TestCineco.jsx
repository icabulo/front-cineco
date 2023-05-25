import React from "react"

import { CinemaDashboard } from "../components/Dasboards/CinemaDashboard"
import { CinemaDetails } from "../components/Forms/CinemaDetails"

function TestCineco() {
  return (
    <div className="div-wrapper">
      <CinemaDashboard />
      <br />
      <hr />
      <br />
      <CinemaDetails />
    </div>
  )
}

export default TestCineco
