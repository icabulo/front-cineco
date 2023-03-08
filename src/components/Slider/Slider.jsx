import Carousel from "react-multi-carousel"
import { CardPremiereFilm } from "../GeneralComponents/Cards"

function Slider() {
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
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
        <CardPremiereFilm
          imagen=""
          title=""
          estreno=""
          genero=""
          edadRecomendada=""
          duracion=""
        />
      </Carousel>
    </div>
  )
}

export default Slider
