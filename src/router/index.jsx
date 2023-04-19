import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorPage, Home, SelectedFilm } from "../pages"
import InProgress from "../pages/InProgress"
import TestCienco from "../pages/TestCineco"

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
    path: "/bogota/peliculas/:title",
    element: <SelectedFilm />,
  },
  {
    path: "/construccion",
    element: <InProgress />,
  },
  {
    path: "/testcineco",
    element: <TestCienco />,
  },
])

function CustomRouter() {
  return <RouterProvider router={routerconfig} />
}

export { CustomRouter }
