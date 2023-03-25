import React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { Navigation, Autoplay } from "swiper"
// Import Swiper styles
import "swiper/swiper-bundle.min.css"

import "./promo-slider.scss"

function PromoSlider() {
  return (
    <div className="bottom-slider">
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        navigation
        modules={[Navigation, Autoplay]}
        className="promo-slider"
      >
        <SwiperSlide>
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/promo_carousel/4/6/5/9/19564-2-esl-CO/Datos%20Usuarios%20Cineco.png"
            alt="Banner Cine Colombia no solicita información"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/promo_carousel/8/4/4/3/3448-14-esl-CO/23127617afa8-miercoles-a-mitad-de-precio.jpg"
            alt="Banner miércoles mitad de precio"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/promo_carousel/8/2/4/6/16428-5-esl-CO/TARJETA%20CINECO%20GRAL.jpg"
            alt="Banner tarjeta Cineco platino"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/promo_carousel/1/1/2/0/20211-2-esl-CO/7f650afc63b9-icono-cine-colombia.png"
            alt="Banner descargar el ícono Cine Colombia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/promo_carousel/9/3/9/9/19939-1-esl-CO/Domicilios1.png"
            alt="Banner Cine Colombia domicilios"
          />
        </SwiperSlide>
        {/* sliders are repeated to allow for a smooth transition in-between slider */}
        <SwiperSlide>
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/promo_carousel/4/6/5/9/19564-2-esl-CO/Datos%20Usuarios%20Cineco.png"
            alt="Banner Cine Colombia no solicita información"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/promo_carousel/8/4/4/3/3448-14-esl-CO/23127617afa8-miercoles-a-mitad-de-precio.jpg"
            alt="Banner miércoles mitad de precio"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/promo_carousel/8/2/4/6/16428-5-esl-CO/TARJETA%20CINECO%20GRAL.jpg"
            alt="Banner tarjeta Cineco platino"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/promo_carousel/1/1/2/0/20211-2-esl-CO/7f650afc63b9-icono-cine-colombia.png"
            alt="Banner descargar el ícono Cine Colombia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://archivos-cms.cinecolombia.com/images/_aliases/promo_carousel/9/3/9/9/19939-1-esl-CO/Domicilios1.png"
            alt="Banner Cine Colombia domicilios"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default PromoSlider
