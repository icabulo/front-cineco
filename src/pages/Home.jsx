import React from "react"
import { useSelector } from "react-redux"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PromoSlider } from "../components/PromoSlider"
import { LandingBanner } from "../components/LandingBanner"
import { CinecoAlternativo } from "../components/CinecoAlternativo"

function Home() {
  const { modalIsOpen } = useSelector((store) => store.modal)
  // eslint-disable-next-line operator-linebreak
  const landingUrl =
    "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/4/9/8/9/39894-19-esl-CO/683438d7042e-qb-banner-web-480x670px-sin-fecha.jpg"
  return (
    <>
      {modalIsOpen.landingModal && <LandingBanner url={landingUrl} />}
      <Header />
      <CinecoAlternativo />
      <PromoSlider />
      <Footer />
    </>
  )
}

export default Home
