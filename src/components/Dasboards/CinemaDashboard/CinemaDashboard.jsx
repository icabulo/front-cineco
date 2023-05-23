/* eslint-disable operator-linebreak */
import React, { useEffect } from "react"
import { Space } from "antd"

import { useSelector, useDispatch } from "react-redux"
import { getCinemasAsync } from "../../../context/features/cinema/cinemaSlice"

import { CreateCinema } from "../../Forms/CreateCinema"
import { EditButton } from "../../Forms/EditButton"
import "./cinema-dashboard.scss"
import { DeleteCinema } from "../../Forms/DeleteCinema"
import { SearchCinema } from "../../Forms/SearchCinema"

function CinemaDashboard() {
  const { isLoading, cinemaList } = useSelector((store) => store.cinema)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCinemasAsync())
  }, [])

  return (
    <div className="cinema-dashboard">
      <CreateCinema />
      <h2>{isLoading ? "Loading..." : "List of cinemas"}</h2>
      {cinemaList.length > 0 && <SearchCinema />}
      {!isLoading &&
        cinemaList.map((item) => (
          <div key={item.idcinema} className="cinema-dashboard__row">
            <Space>
              <EditButton id={item.idcinema} textName={item.name} />
              <DeleteCinema id={item.idcinema} textName={item.name} />
              <h3>{item.name}</h3>
            </Space>
          </div>
        ))}
    </div>
  )
}
export default CinemaDashboard
