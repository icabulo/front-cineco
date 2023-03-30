/* eslint-disable operator-linebreak */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Carousel from "react-multi-carousel"
import { getMoviesByType, movieType } from "../../services/movies"
import { CardPremiereFilm } from "../GeneralComponents/Cards"

function Slider() {
  const [movieArray, setMovieArray] = useState(null)
  useEffect(() => {
    getMoviesByType(movieType.filmPremiere).then((data) => setMovieArray(data))
  }, [getMoviesByType])

  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        {movieArray !== null &&
          movieArray.map((movieInfo) => (
            <CardPremiereFilm
              duracion={movieInfo.duracion}
              edadRecomendada={movieInfo.edadRecomendada}
              estreno={movieInfo.estreno}
              genero={movieInfo.genero}
              imagen={movieInfo.imagen}
              title={movieInfo.title}
              key={movieInfo.id}
            />
          ))}
      </Carousel>
    </div>
  )
}

export default Slider
