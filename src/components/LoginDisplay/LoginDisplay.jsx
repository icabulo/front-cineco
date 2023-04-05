/* eslint-disable jsx-a11y/label-has-associated-control */
/* PENDIENTES
pendientes:
1. como colocar icono y alinearlo con el header
NOTA: ver que el icono de usuario en el header se mantiene alineado con el modal
*/

import React from "react"
import "./login-display.scss"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { closeModal } from "../../context/features/modal/modalSlice"

function LoginDisplay() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div
      className="login__modal-background"
      onClick={() => dispatch(closeModal("loginModal"))}
    >
      <div className="login__container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="close-button"
          onClick={() => dispatch(closeModal("loginModal"))}
        >
          X
        </button>
        <section className="top">
          <h2>Iniciar sesión</h2>
          <p>Entra con tu usuario registrado</p>
        </section>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="user">
              Usuario / Correo <span>*</span>
            </label>
            <input type="email" placeholder="Usuario" />
          </div>
          <div className="input-group">
            <label htmlFor="password">
              Contraseña <span>*</span>
            </label>
            <input type="password" placeholder="Contraseña" />
          </div>
          <button type="button" className="login-btn">
            {" "}
            Ingresar
          </button>
          <a href="construccion" onClick={() => navigate("/construccion")}>
            ¿Olvidaste tu contraseña? Recupérala aquí
          </a>
        </form>
        <section className="bottom">
          <a href="construccion" onClick={() => navigate("/construccion")}>
            ¿No estás registrado? Regístrate aquí
          </a>
        </section>
      </div>
    </div>
  )
}

export default LoginDisplay
