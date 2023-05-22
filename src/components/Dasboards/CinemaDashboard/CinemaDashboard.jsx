/* eslint-disable operator-linebreak */
import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCinemasAsync } from "../../../context/features/cinema/cinemaSlice"

import { CreateCinema } from "../../Forms/CreateCinema"
import { EditButton } from "../../Forms/EditButton"
import "./cinema-dashboard.scss"
import { DeleteCinema } from "../../Forms/DeleteCinema"

function CinemaDashboard() {
  const { isLoading, cinemaList } = useSelector((store) => store.cinema)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCinemasAsync())
  }, [])

  return (
    <div className="cinema-dashboard">
      <CreateCinema />
      <h2>{isLoading ? "Loading..." : "Lista de cines"}</h2>
      {!isLoading &&
        cinemaList.map((item) => (
          <div key={item.idcinema}>
            <h3>{item.name}</h3>
            <EditButton id={item.idcinema} textName={item.name} />
            <DeleteCinema id={item.idcinema} textName={item.name} />
          </div>
        ))}
    </div>
  )
}
export default CinemaDashboard
