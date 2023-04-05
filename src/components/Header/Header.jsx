/* eslint-disable react/button-has-type */
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { openModal } from "../../context/features/modal/modalSlice"
import { SidebarMenu } from "./SidebarMenu"
import LoginDisplay from "../LoginDisplay/LoginDisplay"

import "./header.scss"

import menu from "../../icons/menu.png"
import logoCineco from "../../icons/logo_cineco.svg"
import lupa from "../../icons/lupa.png"
import pos from "../../icons/posicion.png"
import pos2 from "../../icons/posicion2.png"
import arrow from "../../icons/down-arrow.png"
import user from "../../icons/user.png"

function Header() {
  // variable global verificar si el sidebar menu esta abierto
  const { modalIsOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  const modalClick = (modal) => {
    if (modal === "sideMenuModal") {
      dispatch(openModal(modal))
    } else if (modal === "loginModal") {
      dispatch(openModal(modal))
    }
  }
  return (
    <header className="header">
      <div className="header-top">
        {modalIsOpen.sideMenuModal && <SidebarMenu />}
        {modalIsOpen.loginModal && <LoginDisplay />}

        <div className="menuIcon" onClick={() => modalClick("sideMenuModal")}>
          <img src={menu} alt="123" />
        </div>

        <div className="cinecoIcon">
          <img src={logoCineco} alt="234" />
        </div>

        <div className="nav-tabs">
          <div className="nav-tab">
            <button className="item" href="/cartelera">
              {" "}
              <p>Cartelera</p>
            </button>
            <button className="item" href="/pronto">
              {" "}
              <p>Pronto</p>
            </button>
            <button className="item" href="/cinecoAlternativo">
              {" "}
              <p>Cineco Alternativo</p>
            </button>
            <button className="item" href="/comidas">
              {" "}
              <p>Comidas</p>
            </button>
          </div>
        </div>

        <div className="column">
          <div className="nav-search">
            <input type="text" placeholder="Buscar" />
            <button className="lupaButton">
              <img src={lupa} alt="345" />
            </button>
          </div>
        </div>

        <div className="posButton">
          <div className="posDiv">
            <span className="origen">Medellín</span>
            <div>
              <img src={pos2} alt="567-1" className="posicion" id="id-1" />
              <img src={pos} alt="567" className="posicion" id="id-2" />
            </div>
          </div>
        </div>

        <div className="userLogin">
          <button
            className="userButton"
            onClick={() => modalClick("loginModal")}
          >
            <span className="spanArrow">
              <img src={arrow} alt="678" className="img-arrow" />
            </span>
            <span className="spanUser">
              <img src={user} alt="789" className="img-user" />
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
