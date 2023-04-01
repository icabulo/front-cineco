import React, { useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { PromoSlider } from "../components/PromoSlider"
import { LandingBanner } from "../components/LandingBanner"
import { CinecoAlternativo } from "../components/CinecoAlternativo"

function Home() {
  // landing banner initialization
  const [isOpenLB, setIsOpenLB] = useState(true)
  // eslint-disable-next-line operator-linebreak
  const landingUrl =
    "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/4/9/8/9/39894-19-esl-CO/683438d7042e-qb-banner-web-480x670px-sin-fecha.jpg"
  return (
    <>
      <LandingBanner
        open={isOpenLB}
        close={() => setIsOpenLB(false)}
        url={landingUrl}
      />
      <Header />
      <CinecoAlternativo />
      <PromoSlider />
      <Footer />
    </>
  )
}

export default Home
