export const movieType = {
  comingSoon: "COMING_SOON",
  filmPremiere: "FILM_PREMIERE",
}

const movies = [
  {
    imagen:
      "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster/3/6/4/9/39463-1-esl-CO/abb5360ecb35-480x670.jpg",
    title: "Scream 6",
    estreno: "8-marzo-2023",
    genero: "Suspenso, Terror",
    edadRecomendada: "15",
    duracion: "0",
    id: 0,
    type: movieType.filmPremiere,
  },
  {
    imagen:
      "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/6/5/6/9/39656-1-esl-CO/5c4794f1cc7e-m3_cineco_2-poster_480x670.jpg",
    title: "Ellas Hablan",
    estreno: "2-marzo-2023",
    genero: "Drama",
    edadRecomendada: "12",
    duracion: "104",
    id: 1,
    type: movieType.filmPremiere,
  },
  {
    imagen:
      "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/6/5/6/9/39656-1-esl-CO/5c4794f1cc7e-m3_cineco_2-poster_480x670.jpg",
    title: "Ellas Hablan",
    estreno: "2-marzo-2023",
    genero: "Drama",
    edadRecomendada: "12",
    duracion: "104",
    id: 2,
    type: movieType.comingSoon,
  },
  {
    imagen:
      "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/2/9/7/9/39792-18-esl-CO/a344e1aba5f5-d_d_cineco_2-poster_480x670.jpg",
    title: "Calabozos y dragones",
    estreno: "29-marzo-2023",
    genero: "Accion, aventura, drama",
    edadRecomendada: "7",
    duracion: "134",
    id: 3,
    type: movieType.filmPremiere,
  },
  {
    imagen:
      "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/1/6/3/9/39361-1-esl-CO/ecaf9a518764-480x670.jpg",
    title: "Shazam",
    estreno: "16-marzo-2023",
    genero: "Accion, aventura, comedia, DC Comics",
    edadRecomendada: "7",
    duracion: "130",
    id: 4,
    type: movieType.filmPremiere,
  },
]

export function getAllMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies)
    }, 200)
  })
}

export function getMoviesByType(type) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(movies.filter((movie) => movie.type === type))
    }, 200)
  })
}
