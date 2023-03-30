import { createBrowserRouter, RouterProvider } from "react-router-dom"
import FilmPremiere from "../components/Body/EnCartelera/FilmPremiere"
import { ErrorPage, Home } from "../pages"

const routerconfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Cartelera",
    element: <FilmPremiere />,
  },
])

function CustomRouter() {
  return <RouterProvider router={routerconfig} />
}

export { CustomRouter }
