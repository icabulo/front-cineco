import { createBrowserRouter, RouterProvider } from "react-router-dom"
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
])

function CustomRouter() {
  return <RouterProvider router={routerconfig} />
}

export { CustomRouter }
