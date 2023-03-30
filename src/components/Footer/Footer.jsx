import React from "react"
import "./footer.scss"
import cinecoBLue from "../../icons/logo_cineco_blue.svg"
import iconFace from "../../icons/facebook.png"
import iconTwitter from "../../icons/twitter.png"
import iconInsta from "../../icons/instagram.png"

function Footer() {
  return (
    <footer className="container">
      <div className="footer">
        <div className="multicolumn">
          <div className="column is-1">
            <img src={cinecoBLue} alt="0" />
          </div>

          <div className="column is-2">
            <div className="footer-nav">
              <div className="item__legal">
                <a href="/informacion-legal">Información Legal</a>
              </div>

              <div className="item__legal">
                <a href="/acerca-cineco">Acerca de Cineco</a>
              </div>

              <div className="item__legal">
                <a href="/contactanos-pqrs">Contactos PQRS</a>
              </div>

              <div>
                <a href="/preguntas-frecuentes">Preguntas Frecuentes</a>
              </div>
            </div>
          </div>

          <div className="column is-1">
            <p>Siguenos en redes sociales</p>
            <div className="mediaSocial">
              <div className="iconSocial">
                <img src={iconFace} alt="1" />
              </div>

              <div className="iconSocial">
                <img src={iconTwitter} alt="2" />
              </div>

              <div className="iconSocial">
                <img src={iconInsta} alt="3" />
              </div>
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <p>© 2023 Cine Colombia</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
