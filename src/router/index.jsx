import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ErrorPage, Home } from "../pages"
import InProgress from "../pages/InProgress"

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
    path: "/construccion",
    element: <InProgress />,
  },
])

function CustomRouter() {
  return <RouterProvider router={routerconfig} />
}

export { CustomRouter }
