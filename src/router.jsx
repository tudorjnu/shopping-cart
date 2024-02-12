import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import ErrorPage from "./error-page";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      error: <ErrorPage />,
    },
    {
      path: "/cart",
      element: <Cart />,
      error: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
