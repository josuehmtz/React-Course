import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import ErrorPage from "../auth/pages/ErrorPage";
import { DCPage } from "../heroes/pages/DCPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { NavBar } from "../ui";

const router = createBrowserRouter([
    {
      path: "/marvel",
      element: <MarvelPage/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/dc",
      element: <DCPage/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <LoginPage/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <Navigate to={'/marvel'} />
    },
  ]);

export const AppRouter = () => {
  return (
    <>        
      <RouterProvider router={router} />
    </>
  )
}
