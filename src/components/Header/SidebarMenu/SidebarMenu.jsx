import React, { useState } from "react"
import "./sidebar-menu.scss"
import { useDispatch } from "react-redux"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import { closeModal } from "../../../context/features/modal/modalSlice"
import cinecoLogo from "../../../icons/logo_cineco.svg"
/* pendientes:
1. animaciones de iconos y cierre del sidebar
3. links de cada seccion. NOTA: por ahora estan con etiqueta <p>
*/

function SidebarMenu() {
  // if (!open) return null
  const [accordionActive, setAccordionActive] = useState(false)
  const dispatch = useDispatch()
  return (
    <>
      <div
        className="background-overlay"
        onClick={() => dispatch(closeModal("sideMenuModal"))}
      />
      <nav className="sidebar">
        <div className="top-section">
          <div className="image-container">
            <img
              src={cinecoLogo}
              alt="Logo de cinecolombia"
              className="cineco-image"
            />
          </div>
          <nav
            className="return-icon"
            onClick={() => dispatch(closeModal("sideMenuModal"))}
          >
            <KeyboardArrowLeftIcon />
          </nav>
        </div>
        <section className="sidebar-menu">
          <h4 className="title title-cine">Cine</h4>
          <p>Cartelera</p>
          <p>Pronto</p>
          <p>Festivales</p>
        </section>
        <section className="sidebar-menu">
          <h4 className="title title-alternativo">Cineco Alternativo</h4>
          <p>Ópera</p>
          <p>Ballet</p>
          <p>Teatro</p>
          <p>Otros</p>
        </section>
        <section className="sidebar-menu">
          <h4 className="title title-comidas">Comidas</h4>
          <p>Menú</p>
          <p>Domicilios</p>
        </section>
        <section className="sidebar-menu">
          <h4
            className="title title-otros"
            onClick={() => setAccordionActive(!accordionActive)}
          >
            Otros
            {accordionActive ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </h4>
          {accordionActive && (
            <>
              <p>Cambiar de ciudad</p>
              <p>Multiplex</p>
              <p>Contáctanos PQRS</p>
              <p>Ventas corporativas</p>
              <p>Productos CINECO</p>
              <p>Acerca de CINECO</p>
              <p>Información legal</p>
              <p>Preguntas frecuentes</p>
              <p>Proveedores</p>
            </>
          )}
        </section>
        <section className="clubcard-container">
          <a href="route pending" className="clubcard-button">
            Recargar tarjeta Cineco
          </a>
        </section>
      </nav>
    </>
  )
}

export default SidebarMenu
